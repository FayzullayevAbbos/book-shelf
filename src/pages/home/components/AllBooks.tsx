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
interface Book {
  id: number;
  title: string;
}

const AllBooks: React.FC = () => {
  const { books, auth } = useToken((state) => state);
  const dispatch = useDispatch();
  const handleGetAllBooks = () => {
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
          <BookItem key={book.id} book={book} />
        ))}
      </List>
    </Box>
  );
};

export default AllBooks;
