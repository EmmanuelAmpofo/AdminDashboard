import Products from "../../pages/products/Products"
import Dashboard from "../../pages/dashboard/Dasboard"
import Delivery from "../../pages/delivery/Delivery"
import Users from "../../pages/users/Users"
import Orders from "../../pages/orders/Orders"
import SingleUser from "../../pages/singleperson/SingleUser"
import NewUser from "../../pages/new/NewUser"


export const routes = [
    {
        path: '/',
        element: <Dashboard/>,
        nested: [
        ]
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
                path: 'new',
                element: <NewUser/>
            }
        ]
    },
    {
        path: '/users/:userId',
        element: <SingleUser/>,        
    },
    {
        path: '/users/new',
        element: <NewUser/>,        
    },
    {
        path: '/products',
        element: <Products/>,
        nested: [
        ]
    },
    {
        path: '/orders',
        element: <Orders/>,
        nested: [
        ]
    },
    {
        path: '/delivery',
        element: <Delivery/>,
        nested: [
        ]
    }
]

