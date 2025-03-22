<script lang="ts">
  import type { PageProps } from '../../routes/todos/$types';

  import Icon from '@iconify/svelte';

  let { data }: PageProps = $props();

  let todos = data.todos;
</script>

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

<style>
  .todos li {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-start;
  }
</style>
