<script lang="ts">
  import type { PostItem, PostItemComment } from '$types/posts';
  import Icon from '@iconify/svelte';

  interface Props {
    postItem: PostItem;
    postItemComments: Array<PostItemComment>;
  }

  let { postItem, postItemComments }: Props = $props();
</script>

<article>
  <h2>{postItem.title}</h2>
  <p>{postItem.body}</p>

  <h3>Comments</h3>
  <ul class="comments">
    {#each postItemComments as { id, name, email, body } (id)}
      <li>
        <h4>
          <a href="mailto:{email}">
            <Icon icon="material-symbols-light:comment-bank-rounded" width="24" />
            {name}
          </a>
        </h4>
        <p>{body}</p>
      </li>
    {/each}
  </ul>
</article>

<style>
  article {
    max-width: var(--content-max-width);
  }

  .comments {
    li {
      border-radius: var(--form-border-radius);
      background-color: var(--color-gray-ultralight);
      padding: 1rem;
    }

    li + li {
      margin-block-start: 1.7rem;
    }

    a {
      display: flex;
      gap: 0.2rem;
      align-items: center;
    }
  }
</style>
