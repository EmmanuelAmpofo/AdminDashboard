import React from 'react'
import MainCard from '../../utils/reusables/maincard/MainCard';
import { KeyboardArrowUpRounded, MonetizationOnOutlined } from "@material-ui/icons";

function Earning() {
  return (
    <div>
        <MainCard 
        title="Earnings"
        icon={<KeyboardArrowUpRounded />}
        percent="20%"
        children={100}
        footerlink="View net earnings"
        footericon={<MonetizationOnOutlined />}/>
    </div>  
  )
}

export default Earning