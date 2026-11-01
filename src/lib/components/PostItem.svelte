<script lang="ts">
  import type { PostItem } from '$types/posts';
  import snarkdown from 'snarkdown';

  interface Props {
    postItem: PostItem;
  }

  let { postItem }: Props = $props();
</script>

<article>
  <h2>{postItem.title}</h2>
  <p class="byline">By {postItem.author.name}</p>
  {@html snarkdown(postItem.body)}
</article>

<style>
  article {
    max-width: var(--content-max-width);
  }

  .byline {
    margin-block-start: 0.5em;
    font-style: italic;
  }
</style>
