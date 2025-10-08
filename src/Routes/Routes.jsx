import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage/>,
    hydrateFallbackElement:<p>Loading....</p>,
    children: [
      {
        index:true,
        element: <Home />,
        loader: () => fetch('./data.json')
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
     

    ]
  },

]);

export default router
