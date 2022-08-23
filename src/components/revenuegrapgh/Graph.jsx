import React from 'react'
import MainCard from '../../utils/reusables/maincard/MainCard'
import Chart from './chart/Chart'

function Graph({aspect,title, className}) {
  return (
    <div>
        <MainCard title="Last 6 Months" children={<Chart title="user"/>}/>
    </div>
  )
}

export default Graph