import App from "@/App";
import Dashboard from "@/pages/dashboard";
import EventItemsManagementPage from "@/pages/dashboard/event-items";
import RecentEventManagementPage from "@/pages/dashboard/recent-event";
import ServiceManagementPage from "@/pages/dashboard/service-management";
import Home from "@/pages/home";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <EventItemsManagementPage />,
      },
      {
        path: "/dashboard/event-items",
        element: <EventItemsManagementPage />,
      },
      {
        path: "/dashboard/recent-event",
        element: <RecentEventManagementPage />,
      },
      {
        path: "/dashboard/service-management",
        element: <ServiceManagementPage />,
      },
    ],
  },
]);

export default router;
