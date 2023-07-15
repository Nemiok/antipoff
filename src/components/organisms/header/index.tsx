import React from 'react'
import './styles.css'
import { useAppSelector } from '../../../redux-store/hooks'
import { getAuthorizationStatus } from '../../../redux-store/reducers/common-reducer/selectors'
import { AuthorizationStatus } from '../../../utils/objects'
import LogoutButton from '../../molecules/logout-button'
import { useParams } from 'react-router-dom'
import BackButton from '../../molecules/back-button'

const Header = () => {
  const authStatus = useAppSelector(getAuthorizationStatus)
  const { userID } = useParams()
  return (
    <header>
      {authStatus === AuthorizationStatus.Auth &&
        <div className='Header__Controls'>
          {userID && <BackButton />}
          <LogoutButton />
        </div>}
    </header>
  )
}

export default Header