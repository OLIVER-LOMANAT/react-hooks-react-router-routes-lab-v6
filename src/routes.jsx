import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import ErrorPage from "./pages/ErrorPage";

const route = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />
  }
];

// Export both the config and the created router
export default route;
