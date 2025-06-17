import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./Pages/Layout";
import { Home } from "./Pages/Home";
import { Animals } from "./Pages/Animals";
import { AnimalDetails } from "./Pages/AnimalDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "animals",
        element: <Animals />,
      },
      {
        path: "animals/:id",
        element: <AnimalDetails />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
