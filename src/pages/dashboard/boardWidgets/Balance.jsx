import React from 'react'
import MainCard from '../../../utils/reusables/maincard/MainCard'
import { KeyboardArrowUpRounded, AccountBalanceWalletOutlined } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    bal:{
        background: "black"
    }
})
function Balance() {
    const classes = useStyles()
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