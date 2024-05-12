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
            loader: () => fetch('http://localhost:5000/allAvailableFood')
        },
        {
            path: 'manageMyFood',
            element: <PrivateRoutes><ManageMyFoods></ManageMyFoods></PrivateRoutes>,
            loader: () => fetch('http://localhost:5000/manageMyFood/:email')
        },
        {
            path: 'update/:id',
            element: <PrivateRoutes><Update></Update></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/add/${params.id}`)
        },
        {
            path: 'singleFoodDetails/:id',
            element: <PrivateRoutes><SingleFoodDetails></SingleFoodDetails></PrivateRoutes>,
        },
        {
            path: 'extra',
            element: <Extra></Extra>
        }
      ]
    },
  ]);

  export default router;