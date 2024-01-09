import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  Drugs,
  Error,
  HomeLayout,
  Landing,
  Login,
} from "./pages";

import { ErrorElement } from "./components";

// loaders
import { loader as drugsLoader } from './pages/Drugs';


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
        path: "drugs/",
        element: < Drugs/>,
        errorElement: <ErrorElement />,
        loader: drugsLoader,
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
