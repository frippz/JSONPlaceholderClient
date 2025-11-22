<script lang="ts">
  import TodoList from '$lib/components/todos/TodoList.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<TodoList {data} />
