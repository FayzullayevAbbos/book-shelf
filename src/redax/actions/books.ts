/* eslint-disable @typescript-eslint/no-explicit-any */
import { BooksActionTypes,  BooksInfo } from "../../types/booksStoreTypes"

export const BooksAddAction = (payload: BooksInfo[]): any => {
     return { type: BooksActionTypes.BOOKS_ADD, payload: payload}
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BooksErrorAction = (payload: string | any): any => {
     return { type: BooksActionTypes.BOOKS_ERROR, payload: payload}
};

export const BooksRemoveAction = (payload: number):any => {
     return { type: BooksActionTypes.BOOKS_REMOVE, payload: payload }
};
export const BooksStatuseAction = (payload: BooksInfo[]): any => {
     return { type: BooksActionTypes.BOOKS_ADD, payload: payload}
};