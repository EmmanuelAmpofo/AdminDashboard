import React from 'react'
import MainCard from '../../utils/reusables/maincard/MainCard';
import { KeyboardArrowUpRounded, ShoppingCartOutlined } from "@material-ui/icons";

function Orders() {
  return (
    <div>
        <MainCard title="Orders"
        icon={<KeyboardArrowUpRounded />}
        percent="20%"
        children={65}
        footerlink="View all orders"
        footericon={<ShoppingCartOutlined/>}/>
    </div>
  )
}

export default Orders