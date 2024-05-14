import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Layout/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import AvailableFood from "../Pages/AvailableFood/AvailableFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import Update from "../Pages/Update/Update";
import PrivateRoutes from "./PrivateRoutes";
import SingleFoodDetails from "../Pages/SingleFoodDetails/SingleFoodDetails";
import Extra from "../Pages/Extra/Extra";
import MyRequest from "../Pages/MyRequest/MyRequest";
import ChangeLayout from "../Pages/ChangeLayout/ChangeLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>,
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'addFood',
            element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>
        },
        {
            path: 'availableFood',
            element: <AvailableFood></AvailableFood>,
            loader: () => fetch('https://assaigment-11-server-site-henna.vercel.app/allAvailableFood')
        },
        {
            path: 'manageMyFood',
            element: <PrivateRoutes><ManageMyFoods></ManageMyFoods></PrivateRoutes>,
            loader: (params) => fetch(`https://assaigment-11-server-site-henna.vercel.app/manageMyFood/${params.email}`)
        },
        {
            path: 'update/:id',
            element: <PrivateRoutes><Update></Update></PrivateRoutes>,
            loader: ({params}) => fetch(`https://assaigment-11-server-site-henna.vercel.app/update/${params.id}`)
        },
        {
            path: 'singleFoodDetails/:id',
            element: <PrivateRoutes><SingleFoodDetails></SingleFoodDetails></PrivateRoutes>,
            loader: ({params}) => fetch(`https://assaigment-11-server-site-henna.vercel.app/singleFoodDetails/${params.id}`)
        },
        {
            path: 'anotherItem',
            element: <Extra></Extra>
        },
        {
            path: 'request',
            element: <PrivateRoutes><MyRequest></MyRequest></PrivateRoutes>
        },
        {
            path: 'changeLayout',
            element: <ChangeLayout></ChangeLayout>,
            loader: () => fetch('https://assaigment-11-server-site-henna.vercel.app/changeLayout')
        }
      ]
    },
  ]);

  export default router;