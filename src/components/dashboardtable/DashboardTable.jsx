import React from 'react'
import MainCard from '../../utils/reusables/maincard/MainCard'
import TableList from './table/TableList'

function DashboardTable() {
  return (
    <div>
      <MainCard title="Customers" children={<TableList/>}/>
    </div>
  )
}

export default DashboardTable