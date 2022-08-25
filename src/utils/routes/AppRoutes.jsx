import Products from "../../pages/products/Products"
import Dashboard from "../../pages/dashboard/Dasboard"
import Delivery from "../../pages/delivery/Delivery"
import Users from "../../pages/users/Users"
import Orders from "../../pages/orders/Orders"
import SingleUser from "../../pages/singleperson/SingleUser"
import New from "../../pages/new/NewUser"
import { userInputs } from "../../components/addnewuser/addnew/formSource"


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
                element: <New/>
            }
        ]
    },
    {
        path: '/users/:userId',
        element: <SingleUser/>,        
    },
    {
        path: '/users/new',
        element: <New inputs={userInputs} title="Add new user" />,        
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

