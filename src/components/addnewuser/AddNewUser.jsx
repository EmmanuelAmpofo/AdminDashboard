import React from 'react'
import MainCard from '../../utils/reusables/maincard/MainCard'
import AddNew from './addnew/AddNew'

function AddNewUser() {
  return (
    <div>
      <MainCard children={<AddNew/>}/>
    </div>
  )
}

export default AddNewUser