import React from 'react'
import MainCard from '../../../utils/reusables/maincard/MainCard'
import Chart from './chart/Chart'

function Graph() {
  return (
    <div>
        <MainCard title="Last 5 Months" children={<Chart/>}/>
    </div>
  )
}

export default Graph