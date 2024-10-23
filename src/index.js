import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Project from "./Components/Project";
import registerServiceWorker from "./registerServiceWorker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project",
    element: <Project />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
registerServiceWorker();
