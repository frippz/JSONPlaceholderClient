<script lang="ts">
  import PostItem from '$lib/components/PostItem.svelte';

  let { data } = $props();

  let postItem = data.postItem;
  // let postItemComments = data.postItemComments;
</script>

<PostItem {postItem} />
