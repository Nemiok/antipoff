import React from 'react'
import './styles.css'
import { useAppSelector } from '../../../redux-store/hooks'
import { getAuthorizationStatus } from '../../../redux-store/reducers/common-reducer/selectors'
import { AuthorizationStatus } from '../../../utils/objects'
import HeaderControls from '../../molecules/header-controls'


const Header = () => {
  const authStatus = useAppSelector(getAuthorizationStatus)
  return (
    <header>
      {authStatus === AuthorizationStatus.Auth &&
        <HeaderControls />
      }
    </header>
  )
}

export default React.memo(Header)