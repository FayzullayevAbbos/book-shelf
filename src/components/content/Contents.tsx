import { useState } from "react";
import { useDispatch } from "react-redux";




import { Button, CircularProgress } from '@mui/material';

import styles from './Content.module.css';
import fetchAuth from "../../api/fetchAuth";
import { useToken } from "../../hooks/useToken";
import { BookList } from "../bookList/BookList";
import { BooksAddAction, BooksErrorAction } from "../../redax/actions/books";
import { AddBookForm } from "../AddBook/AddBook";

const Content = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { books, auth } = useToken(state => state);
    const dispatch = useDispatch();
    const handleGetAllBooks = () => {
        setIsLoading(true);
        fetchAuth({ key: auth.info.key, secret: auth.info.secret}, '/books')
            .then(res => {
                if (res.isOk) dispatch(BooksAddAction(
                    res.data.map((item: { book: object }) => item.book)
                ));
                else dispatch(BooksErrorAction(res.message));
                setIsLoading(false);
            });
    };

    return (
        <div className={styles.columns}>
            <div className={styles.columns_left}>
                <AddBookForm />
            </div>
            <div className={styles.columns_right}>
                { books.books.length ? <BookList data={books.books}/> : "You have no books" }
                <hr style={{margin: "16px 0 0"}}/>
                { isLoading && <div style={{textAlign: "center", marginBottom: '10px'}}><CircularProgress /></div> }
                <Button 
                    type="submit" 
                    variant="contained"
                    onClick={handleGetAllBooks}
                    sx={{my: 2}}
                >
                    Show all books
                </Button>
            </div>
        </div>
    );
};

export default Content;