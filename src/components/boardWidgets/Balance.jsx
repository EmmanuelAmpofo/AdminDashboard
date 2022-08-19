import React from 'react'
import MainCard from '../../utils/reusables/maincard/MainCard'
import { KeyboardArrowUpRounded, AccountBalanceWalletOutlined } from "@material-ui/icons";

function Balance() {
  return (
    <div>
        <MainCard 
        title="Balance"
        icon={<KeyboardArrowUpRounded />}
        percent="20%"
        children={120}
        footerlink="See all users"
        footericon={<AccountBalanceWalletOutlined/>}/>
    </div>
  )
}

export default Balance