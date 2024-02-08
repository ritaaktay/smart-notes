export interface AIService {
  complete: (prompt: string) => Promise<string>;
}

export interface Note {
  title: string;
  content: string;
  date: string;
  user: string;
}

export interface User {
  name: string;
  password: string;
  email: string;
}
