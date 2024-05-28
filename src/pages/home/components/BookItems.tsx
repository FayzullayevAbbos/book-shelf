import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Box,
  CircularProgress,
} from "@mui/material";
import { Delete, Edit, Save } from "@mui/icons-material";
import { useToken } from "../../../hooks/useToken";
import { useDispatch } from "react-redux";
import fetchAuth from "../../../api/fetchAuth";
import {
 
  BooksRemoveAction,
} from "../../../redax/actions/books";

interface Book {
  id: number;
  isbn: string;
}

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [delLoading, setDelLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(book.isbn);
  const state = useToken((state) => state.auth.info);
  const dispatch = useDispatch();
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (Id: number) => {
    
    fetchAuth(
      { key: state.key, secret: state.secret },
      `/books/${Id}`,
      "PATCH",
    ).then((res) => {
      if (res.isOk) dispatch(BooksStatusAction(Id));
    });
    setIsEditing(false);
  };

  const handleDelete = (Id: number) => {
    fetchAuth(
      { key: state.key, secret: state.secret },
      `/books/${Id}`,
      "DELETE",
    ).then((res) => {
      if (res.isOk) dispatch(BooksRemoveAction(Id));
    });
    setDelLoading(false);
  };
  console.log(delLoading);

  return (
    <ListItem>
      {isEditing ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: "100%",
          }}
        >
          <TextField
            sx={{ width: "100%" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <IconButton onClick={() => handleSave(book.id)}>
            <Save />
          </IconButton>
        </Box>
      ) : (
        <>
          <ListItemText
            sx={{ borderBottom: "1px solid black" }}
            primary={title}
          />
          <IconButton onClick={handleEdit}>
            <Edit />
          </IconButton>
          <IconButton
            onClick={() => {
              handleDelete(book.id);
              setDelLoading(true);
            }}
          >
            {!delLoading ? <Delete /> : <CircularProgress />}
          </IconButton>
        </>
      )}
    </ListItem>
  );
};

export default BookItem;
function BooksStatusAction(Id: number): any {
  throw new Error("Function not implemented.");
}

