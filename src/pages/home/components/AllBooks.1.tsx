/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { List, Box, Button } from "@mui/material";
import BookItem from "./BookItems";
import { useToken } from "../../../hooks/useToken";
import { useDispatch } from "react-redux";
import fetchAuth from "../../../api/fetchAuth";
import {
  BooksAddAction,
  BooksErrorAction,
} from "../../../redax/actions/books";
import { AllBooksProps, Book } from "./AllBooks";

export const AllBooks: React.FC<AllBooksProps> = () => {
  const { books, auth } = useToken((state) => state);
  const dispatch = useDispatch();
  const handleGetAllBooks = () => {
    setIsLoading(true);
    fetchAuth(
      { key: auth.info.key, secret: auth.info.secret },
      "/books",
    ).then((res) => {
      if (res.isOk)
        dispatch(
          BooksAddAction(
            res.data.map((item: { book: object }) => item.book),
          ),
        );
      else dispatch(BooksErrorAction(res.message));
      setIsLoading(false);
    });
  };
  console.log(books.books);

  return (
    <Box>
      <h2>All Books</h2>
      <Button variant='contained' onClick={handleGetAllBooks}>
        {" "}
        all books
      </Button>
      <List>
        {books.books?.map((book: Book) => (
          <BookItem
            key={book.id}
            book={book}
            
          />
        ))}
      </List>
    </Box>
  );
};
function setIsLoading(_arg0: boolean) {
  throw new Error("Function not implemented.");
}

