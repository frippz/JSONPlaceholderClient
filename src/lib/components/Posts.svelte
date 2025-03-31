<!-- 
@component 
Lists all blog posts in an unordered list

@props {posts} array of PostItem

Usage:
```html
<Posts posts={myPostsArray} />
```
-->

<script lang="ts">
  import type { PostItem } from '$types/posts';
  import Icon from '@iconify/svelte';
  import snarkdown from 'snarkdown';

  interface Props {
    posts: Array<PostItem>;
  }

  let { posts }: Props = $props();
</script>

<ul class="posts">
  {#each posts as { id, title, body } (id)}
    <li id="post-{id}">
      <h2>
        <a href="/posts/{id}">
          <Icon icon="material-symbols-light:article-rounded" />
          {title}
        </a>
      </h2>
      {@html snarkdown(body)}
    </li>
  {/each}
</ul>

<style>
  .posts {
    max-width: var(--content-max-width);
  }

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
