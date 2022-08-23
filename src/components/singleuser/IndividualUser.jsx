import React from 'react'
import MainCard from '../../utils/reusables/maincard/MainCard'
import UserContactCard from './usercontact/UserContactCard'

function IndividualUser() {
  return (
    <div>
      <MainCard children={<UserContactCard/>}/>
    </div>
  )
}

export default IndividualUser