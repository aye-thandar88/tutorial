import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./container";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,

  document.getElementById("root")
);
