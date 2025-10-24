<script lang="ts">
  import type { TodoItem, TodoItemUpdate, TodoItemCreate } from '$types/todos';

  import { browser } from '$app/environment';
  import { deleteTodoItem, getTodos, updateTodo, createTodo } from '$lib/api/todos';

  import TodoListItem from './TodoListItem.svelte';
  import Loading from './Loading.svelte';
  import Button from './Button.svelte';
  import Input from './Input.svelte';

  let { data }: { data: { todos: TodoItem[] } } = $props();

  let todosList = $state(data.todos);
  let fetchingTodos = $state<boolean>(false);
  let isEditing = $state<boolean>(false);

  async function refresh() {
    try {
      fetchingTodos = true;
      todosList = await getTodos();
      fetchingTodos = false;
    } catch (error) {
      console.error(error);
    }
  }

  async function completeToggle(event: Event, id: TodoItem['id']) {
    const checkbox = event.target as HTMLInputElement;
    const payload: TodoItemUpdate = {
      completed: checkbox.checked,
    };
    try {
      console.log({ id, payload });
      await updateTodo(id, payload);
    } catch (error) {
      console.error(error);
    }
  }

  async function removeTodo(id: TodoItem['id']) {
    try {
      await deleteTodoItem(id);
      todosList = todosList.filter((todo) => todo.id !== id);
    } catch (error) {
      console.error(error);
    }
  }

  async function editTodo(id: TodoItem['id'], task: TodoItem['task']) {
    try {
      const taskPayload = {
        task: task,
      };
      await updateTodo(id, taskPayload);
    } catch (error) {
      console.error(error);
    }
  }

  let showNewTodoInput = $state(false);
  let newTodoTask = $state<string>();

  async function addTodoItem(task: TodoItemCreate['task']) {
    try {
      const taskPayload = {
        task: task,
      };
      await createTodo(taskPayload);
      refresh();
      newTodoTask = '';
      showNewTodoInput = false;
    } catch (error) {
      console.error(error);
    }
  }

  let buttonIcon = () => {
    if (fetchingTodos) {
      return 'line-md:loading-twotone-loop';
    } else {
      return 'mdi:database-refresh-outline';
    }
  };
</script>

{#if todosList}
  <section class="todos">
    <header>
      <h2>TODO list</h2>
      {#if browser}
        <Button label="Refresh TODOs" icon={buttonIcon()} size="small" onclick={refresh} />
      {/if}
    </header>
    <form method="POST" action="?/completeTodo">
      <ul class="todos-list">
        {#each todosList as { id, task, completed } (id)}
          <TodoListItem
            {id}
            {task}
            {completed}
            {completeToggle}
            {removeTodo}
            {editTodo}
            {isEditing}
            onEditDone={refresh}
          />
        {/each}
        <li>
          {#if showNewTodoInput}
            <Input
              label="New task"
              hiddenLabel={true}
              bind:value={newTodoTask}
              onkeydown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addTodoItem(newTodoTask);
                }
              }}
              placeholder="Enter your task"
            />
          {:else}
            <Button
              label="Add new todo"
              icon="mdi:pencil-add"
              size="small"
              fullWidth={true}
              onclick={() => (showNewTodoInput = !showNewTodoInput)}
            />
          {/if}
        </li>
      </ul>
      {#if !browser}
        <button type="submit">Save</button>
      {/if}
    </form>
    {#if fetchingTodos}
      <Loading spinner={2} />
    {/if}
  </section>
{/if}

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    * {
      margin-block: 0;
    }
  }

  .todos {
    max-width: 48ch;
  }

  .todos-list {
    display: grid;
    justify-items: stretch;
    max-width: 46ch;
    font-size: 1.2em;
  }
</style>
