import {DashboardRounded, GroupRounded, LocalShippingRounded, StoreRounded, FormatListBulletedRounded} from '@material-ui/icons';

export const mainMenuData=[
    {
        text: "Dashboard",
        path: '/',
        icon: <DashboardRounded/>
    },
    {
        text: "Users",
        path: "/users",
        icon: <GroupRounded/>
    },
    {
        text: "Products",
        path: "/products",
        icon: <StoreRounded/>
    },
    {
        text: "Orders",
        path: "/orders",
        icon: <FormatListBulletedRounded/>
    },
    {
        text: "Delivery",
        path: "/delivery",
        icon: <LocalShippingRounded/>
    }

] 