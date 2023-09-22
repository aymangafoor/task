import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import Home from "./pages/Home";
import Inner from "./pages/Inner";
import New from "./pages/new";

const router = createBrowserRouter([
  {
    path: "/",
    element: Home()
  },
  {
    path: "/programs",
    element: Inner()
  },
  {
    path: "/new",
    element: New()
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App;
