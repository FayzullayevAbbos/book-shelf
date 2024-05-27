import { Typography, Button } from "@mui/material";
import styles from "./BooksItem.module.css";

interface BookItemProps {
  title: string;
  published: number;
  author: string;
  isbn: string | number;
  Id: number;
  handleEdit: (Id: number) => void;
  handleDelete: (Id: number) => void;
}

export const BookItem = ({
  Id,
  title,
  isbn,
  published,
  author,
  handleEdit,
  handleDelete,
}: BookItemProps) => {
  return (
    <div className={styles.row}>
      <div className={styles.row_left}>
        <Typography
          variant='subtitle1'
          align='left'
          style={{ width: "100%", margin: "0 10px 10px 10px" }}
        >
          {title}
        </Typography>
        <Typography
          variant='subtitle1'
          align='left'
          style={{ width: "100%", margin: "0 10px 10px 10px" }}
        >
          Year: {published}
        </Typography>
        <Typography
          variant='subtitle1'
          align='left'
          style={{ width: "100%", margin: "0 10px 10px 10px" }}
        >
          Author: {author}
        </Typography>
        <Typography
          variant='subtitle1'
          align='left'
          style={{ width: "100%", margin: "0 10px 10px 10px" }}
        >
          ISBN: {isbn}
        </Typography>
      </div>
      <div className={styles.row_right}>
        <Button
          type='submit'
          variant='contained'
          onClick={() => handleEdit(Id)}
          sx={{ mr: 2 }}
        >
          Edit Book
        </Button>
        <Button
          type='submit'
          variant='contained'
          onClick={() => handleDelete(Id)}
        >
          Delete book from shelf
        </Button>
      </div>
    </div>
  );
};
