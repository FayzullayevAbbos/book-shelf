import fetchAuth from "../../api/fetchAuth";
import { useToken } from "../../hooks/useToken";
import { BooksRemoveAction } from "../../redax/actions/books";
import { BooksInfo } from "../../types/booksStoreTypes";


import { useDispatch } from "react-redux";
import { BookItem } from "./BookItem";

export const BookList = ({ data }: { data: Array<BooksInfo> }) => {
  const state = useToken((state) => state.auth.info);
  const dispatch = useDispatch();
  const handleDelete = (Id: number) => {
    fetchAuth(
      { key: state.key, secret: state.secret },
      `/books/${Id}`,
      "DELETE",
    ).then((res) => {
      if (res.isOk) dispatch(BooksRemoveAction(Id));
    });
  };
  const handleEdit = () => {};
  return (
    <>
      {data.length
        ? data.map((item: BooksInfo) => (
            <>
              <BookItem
                Id={item.id}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                isbn={item.isbn}
                key={item.id}
                title={item.title}
                author={item.author}
                published={item.published}
              />
              <br />
            </>
          ))
        : ""}
    </>
  );
};
