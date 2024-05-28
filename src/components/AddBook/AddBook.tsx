import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  CircularProgress,
  Typography,
  FormHelperText,
  TextField,
  Button,
} from "@mui/material";

import styles from "./AddBook.module.css";
import { useToken } from "../../hooks/useToken";
import postUpdate from "../../api/postUpdate";
import {
  BooksAddAction,
  BooksErrorAction,
} from "../../redax/actions/books";

export const AddBookForm: React.FC = () => {
  const [isbn, setIsbn] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const state = useToken((state) => state);
  const { key, secret } = state.auth.info;
  const { error, success } = state.books;

  const handleClick = () => {
    if (!isbn.length && isbn.length < 13) return;
    const url = "/books";
    const body = { isbn: isbn };
    const headers = { key: key, secret: secret };
    console.log(isbn);

    setLoading(true);
    postUpdate("POST", body, headers, url).then((res) => {
      if (!res.isOk) {
        console.log("xato");

        dispatch(BooksErrorAction(res.message));
      } else {
        dispatch(BooksAddAction([res.data]));
        setIsbn("");
      }
      setLoading(false);
    }); 
  };

  return (
    <div className={styles.row}>
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
      <TextField
        sx={{ mx: 1, my: 0 }}
        label='Book isbn code'
        type='text'
        margin='normal'
        name='isbn'
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <Button type='submit' variant='contained' onClick={handleClick}>
        Add book
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
  );
};
