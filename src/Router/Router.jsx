import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/HomePage/Home";
import Product from "../Page/ProductsPage/Products";
import Dashboard from "../Page/DashboardPage/Dashboard";
import Details from "../Page/ProductsPage/ProductsDetails/Details";


 const CreateRoute = createBrowserRouter([
     {
          path: '/',
          element: <MainLayout></MainLayout>,
          children:[
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/product',
                    element: <Product></Product>,
                    loader: () => fetch(`https://dummyjson.com/products`)
               },
               {
                    path: '/details/:id',
                    element: <Details></Details>,
                    loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
               },
               {
                    path:'/dashboard',
                    element: <Dashboard></Dashboard>,
                    children: [
                         {
                              path: '/dashboard',
                              element: <div>Hallo world</div>
                         },
                         {
                              path: '/dashboard/Profile',
                              element: <div>Profile</div>
                         },
                         {
                              path: '/dashboard/editProfile',
                              element: <div>editProfile</div>
                         }
                    ]
               }
          ]
     }
 ])


export default CreateRoute;