<script lang="ts">
  import type { TodoItem } from '$types/todos';

  import { browser } from '$app/environment';
  import { fade } from 'svelte/transition';

  import Button from '../Button.svelte';

  interface Props extends TodoItem {
    completeToggle: (event: Event, id: TodoItem['id']) => void;
    removeTodo: (id: TodoItem['id']) => void;
    editTodo: (id: TodoItem['id'], todo: TodoItem['task']) => void;
    onEditDone: () => void;
    isEditing: boolean;
  }

  let {
    id,
    task,
    completed,
    completeToggle,
    removeTodo,
    editTodo,
    isEditing = false,
    onEditDone,
  }: Props = $props();

  let updatedTask = $state<string>(task);

  function startEditing() {
    updatedTask = task;
    isEditing = true;
  }

  function handleEdit() {
    if (updatedTask.trim()) {
      editTodo(id, updatedTask);
    }
    onEditDone();
    isEditing = false;
  }
</script>

<li id="todo-${id}" transition:fade>
  {#if !isEditing}
    <label>
      <input
        type="checkbox"
        name={task}
        checked={completed}
        onchange={(e) => completeToggle(e, id)}
      />
      <span>{task}</span>
    </label>
  {:else}
    <input
      type="text"
      bind:value={updatedTask}
      onkeydown={(e) => e.key === 'Enter' && handleEdit()}
    />
  {/if}
  <input type="hidden" name="id" value={id} />
  {#if browser}
    <Button label="Edit {task}" icon="mdi-edit" iconOnly theme="tertiary" onclick={startEditing} />
  {/if}
  <Button
    label="Delete {task}"
    icon="mdi-delete"
    iconOnly
    theme="tertiary"
    onclick={() => removeTodo(id)}
  />
</li>

<style>
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 0.7rem;
    padding-block: 0.25rem;
    border-radius: 0.25rem;
    background-color: light-dark(hsl(0 0 0 / 0.05), hsl(0 0 100 / 0.05));
  }

  li:hover {
    background-color: light-dark(hsl(0 0 0 / 0.1), hsl(0 0 100 / 0.1));
  }

  li + :global(li) {
    margin-block-start: 0.5rem;
  }

  label {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    cursor: pointer;
  }

  span {
    margin-block-start: 0;
  }

  :checked + span {
    text-decoration: hsl(0 100 50 / 0.5) line-through 0.2em;
  }
</style>
