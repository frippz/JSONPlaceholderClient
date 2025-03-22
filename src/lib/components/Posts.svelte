<script lang="ts">
  import Icon from '@iconify/svelte';
  import type { PageProps } from '../../routes/posts/$types';

  let { data }: PageProps = $props();
</script>

<ul class="posts">
  {#each data.posts as { id, title, body }}
    <li class="post__item" id={`post-${id}`}>
      <h2><Icon icon="material-symbols-light:article-rounded" />{title}</h2>
      <p>{body}</p>
    </li>
  {/each}
</ul>

<style>
  li {
    border-radius: var(--form-border-radius);
    border: 1px solid var(--text-color);
    padding: 1rem;
  }

  li + li {
    margin-block-start: 2rem;
  }

  h2 {
    display: flex;
    align-items: self-start;
    gap: 0.2rem;
  }
</style>
