import type { TodoItem, TodoItemUpdate } from '$types/todos';

import { api } from './client';

const endPoints = {
  todos: () => `todos`,
  todosBatch: () => `todos/batch`,
  todoItem: (todoItem: number) => `todos/${todoItem}`,
};

/**
 * Retrieve all TODOs
 * @returns Promise containing the TODOs array
 */
export function getTodos(): Promise<Array<TodoItem>> {
  return api.get(endPoints.todos()).json();
}

/**
 * Retrieve a single TODO item
 * @param todoItem The unique identifier of the TODO
 * @returns Promise containing the TODOs array
 */
export function getTodoItem(todoItem: number): Promise<TodoItem> {
  return api.get(endPoints.todoItem(todoItem)).json();
}

/**
 * Delete a single TODO item
 * @param todoItem The unique identifier of the TODO
 * @returns Promise resolving to a …?
 */
export function deleteTodoItem(todoItem: number): Promise<TodoItem> {
  return api.delete(endPoints.todoItem(todoItem)).json();
}

/**
 * Update a single TODO item
 * @param todoItem The unique identifier of the TODO
 * @returns Promise containing the TODOs array
 */
export function updateTodo(todoItem: number, todo: TodoItemUpdate): Promise<TodoItem> {
  return api.put(endPoints.todoItem(todoItem), { json: todo }).json();
}

/**
 * Update batch of TODO items
 */
export function updateTodoBatch(
  todos: Array<{ id: number } & TodoItemUpdate>,
): Promise<TodoItem[]> {
  return api.put(endPoints.todosBatch(), { json: todos }).json();
}
