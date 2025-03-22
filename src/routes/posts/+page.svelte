<script lang="ts">
  import type { PageData } from './$types';

  import Posts from '$lib/components/Posts.svelte';

  export let data: PageData;
  let form = {};
</script>

<h2>Posts</h2>
<Posts {data} {form} />
