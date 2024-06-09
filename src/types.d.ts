export interface Todo {
    id: number;
    text: string;
    completed: boolean;
    importance: 'low' | 'medium' | 'high';
  }