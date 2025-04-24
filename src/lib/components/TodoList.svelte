<script lang="ts">
  import type { TodoItem, TodoItemUpdate } from '$types/todos';
  import type { PageProps } from '../../routes/todos/$types';

  import { browser } from '$app/environment';
  import { updateTodo } from '$lib/api/todos';

  let { data }: PageProps = $props();

  let todosList = data.todos;

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
</script>

{#if todosList}
  <form method="POST" action="?/completeTodo">
    <ul class="todos">
      {#each todosList as { id, task, completed } (id)}
        <li id="todo-${id}">
          <input type="hidden" name="id" value={id} />
          <label>
            <input
              type="checkbox"
              name={task}
              checked={completed}
              onchange={(e) => completeToggle(e, id)}
            />
            {task}
          </label>
        </li>
      {/each}
    </ul>
    {#if !browser}
      <button>Save</button>
    {/if}
  </form>
{/if}

<style>
  .todos label {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-start;
  }
</style>
