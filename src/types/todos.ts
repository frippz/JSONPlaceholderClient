export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

export interface TodoItemCreate {
  task?: string;
  completed?: boolean;
}

export interface TodoItemUpdate {
  task?: string;
  completed?: boolean;
}
