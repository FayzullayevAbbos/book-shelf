import React from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useToken } from "./hooks/useToken";
import Login from "./pages/login/Login";
import Register from "./pages/newLogin/Register";
import Home from "./pages/home/Home";




const App: React.FC = () => {
  const {token} = useToken(state=> state.auth.info);
  
  
  const router = createBrowserRouter([
      {
        path:"/",
        element:token.length ? <Home /> : <Navigate to="/login" replace />
      },
    {
      path:"/login",
      element:  <Login/>
    },
    {
      path:"/register",
      element:<Register/>
    }
    
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
    
  );
};

export default App;
