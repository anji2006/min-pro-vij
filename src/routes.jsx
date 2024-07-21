import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import All from "./components/All";


// {
//   endpoint: "/last-month",
//   title: "Last Month"
// },
// {
//   endpoint: "/last-3-months",
//   title: "Last 3 Month"
// },
// {
//   endpoint: "/last-12-months",
//   title: "Last 12 Month"
// },

const router = createBrowserRouter([
    {
      path: "/",
      // element: <div> this is routes</div>,
      element: <Layout />,
    //   loader: rootLoader,
      children: [
        {
          path: "todos",
          element: <div>this is view</div>,
        },
        {
          path: "/all",
          element: <All />,
        },
        {
          path: "/today",
          element: <div>this is Today</div>,
        },
        {
          path: "/feature",
          element: <div>this is Feature</div>,
        },
        {
          path: "/last-month",
          element: <div>this is  last months</div>,
        },
        {
          path: "/last-3-months",
          element: <div>this is 3 months</div>,
        },
        {
          path: "/last-12-months",
          element: <div>this is 12 months</div>,
        },
      ],
    },
  ]);

export default router