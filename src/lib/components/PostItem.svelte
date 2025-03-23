<script lang="ts">
  import type { PostItem } from '$types/posts';

  interface Props {
    postItem: PostItem;
  }

  let { postItem }: Props = $props();
</script>

<article>
  <h2>{postItem.title}</h2>
  <p>{postItem.body}</p>
</article>

<style>
  article {
    max-width: var(--content-max-width);
  }
</style>
