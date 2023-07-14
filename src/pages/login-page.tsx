import React, { useEffect } from 'react'
import LoginForm from '../components/organisms/login-form'
import { useAppSelector } from '../redux-store/hooks'
import { useNavigate } from 'react-router-dom'
import { getAuthorizationStatus } from '../redux-store/reducers/common-reducer/selectors'
import { AuthorizationStatus, PAGE_ROUTES } from '../utils/objects'

const LoginPage = () => {

  const authStatus = useAppSelector(getAuthorizationStatus)

  const navigate = useNavigate()

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(PAGE_ROUTES.TEAM)
    }
  }, [authStatus])

  return (
    <article className='LoginPage__Article'>
      <LoginForm />
    </article>
  )
}

export default LoginPage