<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<h2>Users</h2>
<p>Coming soon…</p>
<pre>{JSON.stringify(data, null, 2)}</pre>
