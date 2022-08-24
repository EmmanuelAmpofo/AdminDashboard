import React from 'react'
import MainCard from '../../utils/reusables/maincard/MainCard'
import TableList from './table/TableList'

function DashboardTable({title, className}) {
  return (
    <div>
      <MainCard title={title} children={<TableList/>} className={className}/>
    </div>
  )
}

export default DashboardTable