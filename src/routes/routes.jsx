import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Video from "../pages/Video";
const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {path: "/", element: <Home />},
          { path: "/video/:videoId", element: <Video /> },
          // Add more routes as needed
        ],
      },
    ]
)
export default router;