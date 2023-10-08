import { createBrowserRouter } from "react-router-dom";

import Notifications from "~/pages/notifications";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import NotFound from "~/pages/NotFound";
import MainLayout from "~/layout/main";
import Profile from "~/pages/profile";
import Messages from "~/pages/messages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: ":slug",
        element: <Profile />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
