import React from 'react'
import MainCard from '../../utils/reusables/maincard/MainCard'
import Chart from './chart/Chart'

function Graph({aspect,title, className}) {
  return (
    <div>
        <MainCard title={title} children={<Chart aspect={aspect} />} aspect={aspect} />
    </div>
  )
}

export default Graph