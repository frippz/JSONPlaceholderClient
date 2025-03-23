import type { TodoItem } from '$types/todos';

import { api } from './client';

const endPoints = {
  todos: () => `todos`,
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
