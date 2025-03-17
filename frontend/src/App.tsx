import { useState } from "react";
import Layout from "./layouts/layout";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <p>Home Page</p>
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
