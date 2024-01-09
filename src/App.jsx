import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  Drugs,
  Error,
  HomeLayout,
  Landing,
  Login,
  Products,
  SingleProduct,
} from "./pages";

import { ErrorElement } from "./components";

// loaders
import { loader as productsLoader } from './pages/Products';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
      },
      {
        path: "drugs/",
        element: < Drugs/>,
        errorElement: <ErrorElement />,
      },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
