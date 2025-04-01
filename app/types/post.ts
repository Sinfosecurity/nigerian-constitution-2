export interface FormData extends globalThis.FormData {
  get(name: string): FormDataEntryValue | null;
}

export interface Post {
  id?: number;
  title: string;
  content: string;
  created_at: string;
  author_id?: string;
  tags?: string[];
  views?: number;
  replies?: number;
}
