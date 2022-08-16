
import React from 'react'
import MainCard from '../../../utils/reusables/maincard/MainCard'
import { MoreVertOutlined } from '@material-ui/icons'
import RevCircle from './RevCircle'

export default function TotalRevenue() {
  return (
    <div>
        <MainCard title="Total Revenue" icon={<MoreVertOutlined/>} children={<RevCircle/>} />
    </div>
  )
}
