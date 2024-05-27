import {
  BooksActionTypes,
  BooksInfo,
  BooksState,
  BooksAction,
} from "../types/booksStoreTypes";

const initialState: BooksState = {
  books: [],
  error: "",
  success: "",
};

export const booksReducer = (
  state = initialState,
  action: BooksAction,
): BooksState => {
  switch (action.type) {
    case BooksActionTypes.BOOKS_ADD:
      return {
        ...state,
        books: action.payload,
        error: "",
        success: "",
      };
    case BooksActionTypes.BOOKS_REMOVE:
      return {
        ...state,
        books: state.books.filter(
          (item: BooksInfo) => item.id !== action.payload,
        ),
        error: "",
        success: "",
      };
    case BooksActionTypes.BOOKS_ERROR:
      return {
        ...state,
        error: action.payload,
        books: [],
        success: "",
      };
    default:
      return state;
  }
};
