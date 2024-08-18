import React from "react";

import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/layout/Contact/Contact.jsx";
import About from "./components/layout/About/About.jsx";
<<<<<<< HEAD
=======
import store from "./store";
import { Provider } from "react-redux";
>>>>>>> c885bba4e29fa493f8cdeb0fd0e2b823e7b27445

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
