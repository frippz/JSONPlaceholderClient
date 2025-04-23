<script lang="ts">
  import type { PageProps } from '../../routes/todos/$types';

  let { data }: PageProps = $props();

  let todosList = data.todos;
</script>

{#if todosList}
  <ul class="todos">
    {#each todosList as { id, task, completed } (id)}
      <li id="todo-${id}">
        <label>
          <input type="checkbox" checked={completed} />
          {task}
        </label>
      </li>
    {/each}
  </ul>
{/if}

<style>
  .todos label {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-start;
  }
</style>
