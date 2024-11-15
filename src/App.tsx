import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Repository from "./pages/Repository/Repository";
import Page404 from "./pages/404/404";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
    ]
  }
])

const App = () => {  
  return <RouterProvider router={router} />
}

export default App;