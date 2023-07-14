import React from 'react'
import './styles.css'
import { useAppDispatch, useAppSelector } from '../../../redux-store/hooks'
import { getAuthorizationStatus } from '../../../redux-store/reducers/common-reducer/selectors'
import { AuthorizationStatus, PAGE_ROUTES } from '../../../utils/objects'
import useScreenWidth from '../../../hooks/useScreenWidth'
import { SVG_ICONS } from '../../../assets/images/SVG_ICONS'
import { dropToken } from '../../../services/token'
import { useNavigate } from 'react-router-dom'
import { setAuthorizationStatus } from '../../../redux-store/reducers/common-reducer'

const Header = () => {
  const authStatus = useAppSelector(getAuthorizationStatus)
  const screnWidth = useScreenWidth()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault()
    dropToken()
    dispatch(setAuthorizationStatus(AuthorizationStatus.Unknown))
    navigate(PAGE_ROUTES.LOGIN)
  }

  return (
    <header>
      {authStatus === AuthorizationStatus.Auth &&
        <div className='Header__Controls'>
          <button onClick={handleLogout} className='HeaderControls__ExitButton'>{
            screnWidth >= 769 ? 'Выход' :
              SVG_ICONS.EXIT_ICON
          }</button>
        </div>}
    </header>
  )
}

export default Header