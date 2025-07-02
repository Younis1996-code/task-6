import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import HomePage from "./pages/HomePage";
import PostDetail from "./pages/PostDetail";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Newsletter from "./pages/Newsletter";
import App from "./App";
import PostCon from "./pages/PostCon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <Error />,
      },
      {
        path: "/projects",
        element: <Projects />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
        errorElement: <Error />,
      },

      {
        path: "/post",
        element: <PostCon />,
        errorElement: <Error />,
        children: [
          {
            path: "/post/:id",
            element: <PostDetail />,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
]);

export default router;
