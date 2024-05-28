import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  CircularProgress,
  FormHelperText,
  Typography,
} from "@mui/material";
import {
  BooksAddAction,
  BooksErrorAction,
} from "../../../redax/actions/books";
import { useDispatch } from "react-redux";
import { useToken } from "../../../hooks/useToken";
import postUpdate from "../../../api/postUpdate";

interface AddBookProps {
  addBook: (book: { id: number; title: string }) => void;
}

const AddBook: React.FC<AddBookProps> = () => {
  const [isbn, setIsbn] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [auth, setAuth] = useState<string>("");

  const cover: string = "https://picsum.photos/200/300";

  const [page, setPage] = useState<string>();
  const [published, setPublished] = useState<string>("");

  const [isPub, setIsPub] = useState<boolean>(false);
  const [isPage, setIsPage] = useState<boolean>(false);

  const [isLoading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const state = useToken((state) => state);
  const { key, secret } = state.auth.info;
  const { error, success } = state.books;

  function handleClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (!isbn.length && isbn.length < 13) return;
    const url = "/books";
    const body = {
      id: Math.floor(Math.random() * 1001),
      isbn: title,
      title: title,
      cover: cover,
      author: auth,
      published: published,
      pages: page,
    };
    const headers = { key: key, secret: secret , data:isbn }
    console.log(isbn);

    setLoading(true);
    postUpdate("POST", body, headers, url).then((res) => {
      console.log(res);

      if (!res.isOk) {
        dispatch(BooksErrorAction(res.message));
      } else {
        console.log(res.data);
        setTitle("")
        
        setPage('')
        setPublished('')
        setAuth('')

        dispatch(BooksAddAction([res.data]));
        setIsbn("");
      }
      setLoading(false);
    });
  }

  function handlePub(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    const numericValue = Number(inputValue);

    if (!isNaN(numericValue)) {
      setPublished(inputValue);
      setIsPub(false);
    } else {
      console.log(inputValue);

      setIsPub(true);
    }
  }

  const handlePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = Number(inputValue);

    if (!isNaN(numericValue)) {
      setPage(inputValue);
      setIsPage(false);
    } else {
      setIsPage(true);
    }
  };

  return (
    <Box
      component='form'
      onSubmit={handleClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      {isLoading && (
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <CircularProgress />
        </div>
      )}
      {!!error && (
        <FormHelperText
          style={{ width: "100%", margin: "0 10px 10px 10px" }}
          error={true}
          children={error}
        />
      )}
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <TextField
          sx={{ width: "100%" }}
          label='Book Title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setIsbn(e.target.value);
          }}
          required
        />
        <TextField
          sx={{ width: "100%" }}
          label='Book Auth'
          value={auth}
          onChange={(e) => {
            setAuth(e.target.value);
          }}
          required
        />
        <TextField
          sx={{ width: "100%" }}
          label='published (year)'
          value={published}
          onChange={handlePub}
          error={isPub}
          helperText={isPub ? "Please enter a valid number" : ""}
          required
        />
        <TextField
          sx={{ width: "100%" }}
          label='page'
          value={page}
          onChange={handlePage}
          error={isPage}
          helperText={isPage ? "Please enter a valid number" : ""}
          required
        />
        <Button
          sx={{ width: "100%" }}
          type='submit'
          variant='contained'
        >
          Add Book
        </Button>
        {!!success.length && (
          <Typography
            variant='subtitle1'
            align='left'
            style={{ width: "100%", margin: "0 10px 10px 10px" }}
          >
            {success}
          </Typography>
        )}
      </div>
    </Box>
  );
};

export default AddBook;



