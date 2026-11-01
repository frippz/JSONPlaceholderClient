<script lang="ts">
  import type { PageProps } from './$types';
  import PostItem from '$lib/components/PostItem.svelte';

  let { data }: PageProps = $props();
</script>

<PostItem postItem={data.postItem} />
