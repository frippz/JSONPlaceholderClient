<script lang="ts">
  import PostItem from '$lib/components/PostItem.svelte';

  let { data } = $props();
</script>

<PostItem postItem={data.postItem} />
