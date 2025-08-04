import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import CreatePost, { createPostAction } from "./assets/components/createPost.jsx";
import PostsList from "./assets/components/PostsList.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PostsList />,
      },
      {
        path: "/create-Post",
        element: <CreatePost />,action:createPostAction,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
