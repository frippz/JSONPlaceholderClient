<script lang="ts">
  import TodoList from '$lib/components/TodoList.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  let form = null;
</script>

<TodoList {data} {form} />
