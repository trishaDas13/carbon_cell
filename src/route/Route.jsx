import React from "react";
import Home from "../pages/home/Home";
import Population from "../pages/population/Population";
import Currency from "../pages/currency/Currency";
import Wallet from "../pages/wallet/Wallet";
import Layout from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Route = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/population",
          element: <Population />,
        },
        {
          path: "/currency",
          element: <Currency />,
        },
        {
          path: "/wallet",
          element: <Wallet />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Route;
