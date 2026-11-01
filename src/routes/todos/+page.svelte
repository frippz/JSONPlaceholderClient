<script lang="ts">
  import TodoList from '$lib/components/todos/TodoList.svelte';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<TodoList {data} />
