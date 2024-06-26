import { createBrowserRouter } from "react-router-dom";
import Layout from "../../layouts/Layout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SignUp/SignUp";
import Error from "../../Pages/Error/Error";
import CreatePost from "../../Pages/Home/CreatePost/CreatePost";
import ViewPost from "../../Pages/Home/ViewPost/ViewPost";
import UpdatePost from "../../Pages/Home/UpdatePost/UpdatePost";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SingUp />,
      },
      {
        path: "/create-post",
        element: (
          <PrivateRoute>
            <CreatePost />
          </PrivateRoute>
        ),
      },
      {
        path: "/view-post",
        element: (
          <PrivateRoute>
            <ViewPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-post/:id",
        element: (
          <PrivateRoute>
            <UpdatePost />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/post/${params.id}`),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default router;