<script lang="ts">
  import type { TodoItem, TodoItemUpdate } from '$types/todos';
  import type { PageProps } from '../../routes/todos/$types';

  import { browser } from '$app/environment';
  import { fade } from 'svelte/transition';
  import { deleteTodoItem, updateTodo } from '$lib/api/todos';

  import Button from './Button.svelte';

  let { data }: PageProps = $props();

  let todosList = $state(data.todos);

  async function completeToggle(event: Event, id: TodoItem['id']) {
    const checkbox = event.target as HTMLInputElement;
    const payload: TodoItemUpdate = {
      completed: checkbox.checked,
    };
    try {
      console.log({ id, payload });
      await updateTodo(id, payload);
    } catch (error) {
      console.error(error);
    }
  }

  async function removeTodo(id: TodoItem['id']) {
    try {
      await deleteTodoItem(id);
      todosList = todosList.filter((todo) => todo.id !== id);
    } catch (error) {
      console.error(error);
    }
  }
</script>

{#if todosList}
  <form method="POST" action="?/completeTodo">
    <ul class="todos">
      {#each todosList as { id, task, completed } (id)}
        <li id="todo-${id}" transition:fade>
          <label>
            <input
              type="checkbox"
              name={task}
              checked={completed}
              onchange={(e) => completeToggle(e, id)}
            />
            {task}
          </label>
          <input type="hidden" name="id" value={id} />
          <Button
            label="Delete {task}"
            icon="mdi-delete"
            iconOnly
            theme="tertiary"
            onclick={() => removeTodo(id)}
          />
        </li>
      {/each}
    </ul>
    {#if !browser}
      <button>Save</button>
    {/if}
  </form>
{/if}

<style>
  .todos {
    display: grid;
    justify-items: stretch;
    max-width: 46ch;
    font-size: 1.2em;

    & > * {
      margin-block-start: 0;
    }

    li {
      padding-inline: 0.7rem;
      padding-block: 0.25rem;
      border-radius: 0.25rem;
      background-color: light-dark(hsl(0 0 0 / 0.05), hsl(0 0 100 / 0.05));

      &:hover {
        background-color: light-dark(hsl(0 0 0 / 0.1), hsl(0 0 100 / 0.1));
      }

      & + & {
        margin-block-start: 0.5rem;
      }
    }

    label {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: flex-start;
      flex: 1;
      cursor: pointer;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
