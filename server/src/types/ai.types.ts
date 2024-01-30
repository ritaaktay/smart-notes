export interface AIService {
  complete: (prompt: string) => Promise<string>;
}
