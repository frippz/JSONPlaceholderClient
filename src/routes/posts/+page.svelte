<script lang="ts">
  import type { PageProps } from './$types';
  import Posts from '$lib/components/Posts.svelte';

  let { data }: PageProps = $props();
</script>

<h2>Posts</h2>
<Posts posts={data.posts} />
