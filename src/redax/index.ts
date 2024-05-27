import { combineReducers } from "redux";
import { authReducer } from "./authStore";
import { booksReducer } from "./booksStore";


export const rootReducer = combineReducers({
     auth: authReducer,
     books: booksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;