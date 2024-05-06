import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import NavBar from "../Pages/Shared/NavBar";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/navbar',
          element:<NavBar></NavBar>
        },
        {
          path:'/login',
          element:<Login/>
        }

      ]
    },
  ]);
  export default router;