import React from 'react'
import BackButton from '../back-button'
import LogoutButton from '../logout-button'
import { useParams } from 'react-router-dom'
import './styles.css'

const HeaderControls = () => {
  const { userID } = useParams()

  return (
    <div className='Header__Controls'>
      {userID && <BackButton />}
      <LogoutButton />
    </div>
  )
}

export default React.memo(HeaderControls)