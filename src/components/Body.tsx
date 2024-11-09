import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Repository from "../pages/Repository/Repository";
import Page404 from "../pages/404/404";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'repository/:id',
    element: <Repository />
  },
  {
    path: '*',
    element: <Page404 />
  }
])

const Body = () => {
  return <main className="body">
    <RouterProvider router={router} />
  </main>
};

export default Body;