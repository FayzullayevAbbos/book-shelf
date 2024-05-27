export enum BooksActionTypes {
  BOOKS_ADD = "BOOKS_ADD",
  BOOKS_REMOVE = "BOOKS_REMOVE",
  BOOKS_ERROR = "BOOKS_ERROR",
}

export interface BooksInfo {
  author: string;
  cover: string;
  id: number;
  isbn: number;
  pages: number;
  published: number;
  title: string;
}

export interface BooksState {
  books: Array<BooksInfo>;
  error: string;
  success: string;
}

interface BooksAddAction {
  type: BooksActionTypes.BOOKS_ADD;
  payload: Array<BooksInfo>;
}

interface BooksRemoveAction {
  type: BooksActionTypes.BOOKS_REMOVE;
  payload: number;
}

interface BooksErrorAction {
  type: BooksActionTypes.BOOKS_ERROR;
  payload: string;
}

export type BooksAction =
  | BooksAddAction
  | BooksRemoveAction
  | BooksErrorAction;
