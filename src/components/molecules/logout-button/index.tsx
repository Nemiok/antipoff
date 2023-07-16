import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../redux-store/hooks'
import { dropToken } from '../../../services/token'
import { setAuthorizationStatus } from '../../../redux-store/reducers/common-reducer'
import { AuthorizationStatus, PAGE_ROUTES } from '../../../utils/objects'
import { SVG_ICONS } from '../../../assets/images/svg-icons'
import useScreenWidth from '../../../hooks/useScreenWidth'
import './styles.css'

const LogoutButton = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const screnWidth = useScreenWidth()

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault()
    dropToken()
    dispatch(setAuthorizationStatus(AuthorizationStatus.Unknown))
    navigate(PAGE_ROUTES.LOGIN)
  }
  return (
    <button onClick={handleLogout} className='ExitButton'>{
      screnWidth >= 769 ? 'Выход' :
        SVG_ICONS.EXIT_ICON
    }</button>
  )
}

export default React.memo(LogoutButton)