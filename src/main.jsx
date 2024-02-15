import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Boook from "./components/Book.jsx";
import BookShop from "./components/BookShop.jsx";
import Published from "./components/Published.jsx";
import FavBooks from "./components/FavBooks.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Boook/>
  },
  {
    path:"/BookShop",
    element:<BookShop/>
  },
  {
  path:"published/:itemId",
  element:<Published/>
  },
  {
    path:"newbooks/:BookId",
    element:<FavBooks/>
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
