<script lang="ts">
  import Icon from '@iconify/svelte';
  import { getTodos } from '$lib/api/todos';

  let fetchTodos = getTodos();
</script>

{#await fetchTodos then todos}
  <ul class="todos">
    {#each todos as { userId, id, title, completed }}
      <li data-userid={userId} id={`todo-${id}`}>
        {#if completed}
          <Icon icon="material-symbols-light:check-box" width={24} />
        {:else}
          <Icon icon="material-symbols-light:check-box-outline-blank" width={24} />
        {/if}
        {title}
      </li>
    {/each}
  </ul>
{/await}

<style>
  .todos li {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-start;
  }
</style>
