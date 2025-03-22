<script lang="ts">
  import TodoList from '$lib/components/TodoList.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  let form = {};
</script>

<h2>TODO list</h2>
<TodoList {data} {form} />
