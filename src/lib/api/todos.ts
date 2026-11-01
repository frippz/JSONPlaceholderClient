import type { TodoItem, TodoItemCreate, TodoItemUpdate } from '$types/todos';

import { api } from './client';

const endPoints = {
  todos: () => `todos/`,
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
 * @returns Promise containing the TODO item
 */
export function getTodoItem(todoItem: number): Promise<TodoItem> {
  return api.get(endPoints.todoItem(todoItem)).json();
}

/**
 * Delete a single TODO item
 * @param todoItem The unique identifier of the TODO
 * @returns Promise resolving when the API responds with 204 No Content
 */
export async function deleteTodoItem(todoItem: number): Promise<void> {
  await api.delete(endPoints.todoItem(todoItem));
}

/**
 * Update a single TODO item
 * @param todoItem The unique identifier of the TODO
 * @returns Promise containing the updated TODO item
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

/**
 * Create a single TODO item
 */
export function createTodo(payload: TodoItemCreate): Promise<TodoItem> {
  return api.post(endPoints.todos(), { json: payload }).json();
}
