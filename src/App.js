import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import Home from "./pages/Home";
import Inner from "./pages/Inner";

const router = createBrowserRouter([
  {
    path: "/",
    element: Home()
  },
  {
    path: "/programs",
    element: Inner()
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App;
