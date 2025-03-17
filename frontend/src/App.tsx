import { useState } from "react";
import Layout from "./layouts/Layout";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";

const App = () => {
  // The children prop is a special prop in React that represents the content nested between the opening and closing tags of a component.
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <p>Home Page</p> {/* This is passed as childeren to the Layout */}
        </Layout>
      ),
    },
    {
      path: "/search",
      element: (
        <Layout>
          <p>Search Page</p>
        </Layout>
      ),
    },
    {
      path: "/register",
      element: (
        <Layout>
          <Register />
        </Layout>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
