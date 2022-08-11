import Products from "../../pages/products/Products"
import Dashboard from "../../pages/dashboard/Dasboard"
import Delivery from "../../pages/delivery/Delivery"
import Users from "../../pages/users/Users"
import Orders from "../../pages/orders/Orders"
// import SignUp from "../../pages/signup/SignUp"
// import Login from "../../pages/login/Login"

export const routes = [
    {
        path: '/',
        element: <Dashboard/>
    },
    {
        path: '/users',
        element: <Users/>
    },
    {
        path: '/products',
        element: <Products/>
    },
    {
        path: '/orders',
        element: <Orders/>
    },
    {
        path: '/delivery',
        element: <Delivery/>
    },
    // {
    //     path: '/',
    //     element: <Dashboard/>
    // },
    // {
    //     path: '/',
    //     element: <Dashboard/>
    // },

]

