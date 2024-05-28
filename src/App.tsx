import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useToken } from "./hooks/useToken";
import Login from "./pages/login/Login";
import Register from "./pages/newLogin/Register";
import Home from "./pages/home/Home";
import AddBook from "./pages/home/components/AddBooks";
import AllBooks from "./pages/home/components/AllBooks";

const App: React.FC = () => {
  const { token } = useToken((state) => state.auth.info);

  const router = createBrowserRouter([
    {
      path: "/",
      element: token.length ? (
        <Home />
      ) : (
        <Navigate to='/login' replace />
      ),
      children: [
        {
          path: "add-book",
          element: (
            <AddBook
              addBook={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          ),
        },
        {
          path: "all-books",
          element: <AllBooks  />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
