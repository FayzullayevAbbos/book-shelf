import { BooksActionTypes, BooksAction, BooksInfo } from "../../types/booksStoreTypes"

export const BooksAddAction = (payload: BooksInfo[]): any => {
     return { type: BooksActionTypes.BOOKS_ADD, payload: payload}
};

export const BooksErrorAction = (payload: string | any): any => {
     return { type: BooksActionTypes.BOOKS_ERROR, payload: payload}
};

export const BooksRemoveAction = (payload: number): any => {
     return { type: BooksActionTypes.BOOKS_REMOVE, payload: payload }
};