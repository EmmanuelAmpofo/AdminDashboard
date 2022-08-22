import Products from "../../pages/products/Products"
import Dashboard from "../../pages/dashboard/Dasboard"
import Delivery from "../../pages/delivery/Delivery"
import Users from "../../pages/users/Users"
import Orders from "../../pages/orders/Orders"
import SingleUser from "../../pages/singleuser/SingleUser"
import New from "../../pages/new/New"


export const routes = [
    {
        path: '/',
        element: <Dashboard/>
    },
    {
        path: '/users',
        element: <Users/>,
        nested: [
            {
                path: ':userId',
                element: <SingleUser/>
            },
            {
                path: '/new',
                element: <New/>
            }
        ]
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
    }

]

