import React, { FormEvent, useEffect, useState } from 'react'
import './styles.css'
import { useAppDispatch, useAppSelector } from '../../../redux-store/hooks'
import { loginAction } from '../../../redux-store/actions/auth'
import isValidEmail from '../../../utils/functions/validate-email'
import { getAuthorizationStatus, getErrorStatus, getLoadingStatus } from '../../../redux-store/reducers/common-reducer/selectors'
import { AuthorizationStatus, LoadingStatus, PAGE_ROUTES } from '../../../utils/objects'
import { SVG_ICONS } from '../../../assets/images/svg-icons'
import { checkFormInputsFullness } from '../../../utils/functions/check-form-inputs-fullness'
import { setError, setErrorNull } from '../../../redux-store/reducers/common-reducer'
import ErrorNotification from '../../molecules/error-notification'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailCorrect, setIsEmailCorrect] = useState(true)
  const [isPasswordHere, setIsPasswordHere] = useState(true)
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const isLoading = useAppSelector(getLoadingStatus)
  const errors = useAppSelector(getErrorStatus)

  const dispatch = useAppDispatch()

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const areFieldsFull: boolean = checkFormInputsFullness(e.target as HTMLFormElement)

    if (!areFieldsFull) return dispatch(setError(['Заполните все поля']))

    dispatch(loginAction({ email, password }))
  }

  const handleEmailValidation = (value: string) => {
    if (!isValidEmail(value)) setIsEmailCorrect(false)
    else setIsEmailCorrect(true)
  }

  return (
    <div className='LoginForm__Container'>
      <form onSubmit={(e) => { handleFormSubmit(e) }} className='LoginForm'>
        <h1 className='LoginForm__Title'>Авторизация</h1>

        {errors.length > 0 && <ErrorNotification errors={errors} />}

        <label htmlFor="login">
          <div className='LoginForm__NameLabel LoginForm__Label'>Электронная почта</div>
          <input className={!isEmailCorrect ? 'errorInput' : ''} onBlur={(e) => handleEmailValidation(e.currentTarget.value)} onChange={(e) => setEmail(e.target.value)} type="text" id='login' name='login' placeholder='Введите email' />
        </label>

        <label className='LoginForm__PasswordContainer' htmlFor="password">
          <div className='LoginForm__PasswordLabel LoginForm__Label'>Пароль</div>
          <input className={!isPasswordHere ? 'errorInput' : ''} onChange={(e) => setPassword(e.target.value)} type={isPasswordShown ? 'text' : 'password'} id='password' name='password' placeholder='Введите пароль' />
          <div className='LoginForm__ShowPasswordButton' onClick={() => setIsPasswordShown(!isPasswordShown)}>{isPasswordShown ? SVG_ICONS.EYE_OPEN : SVG_ICONS.EYE_CLOSED}</div>
        </label>

        <button disabled={isLoading === LoadingStatus.loading} className='LoginForm__SubmitButton'>{isLoading === LoadingStatus.loading ? 'Загрузка...' : 'Войти'}</button>
      </form>
      <div className='LoginForm__RegistrationLink'>Нет профиля? <Link onClick={() => dispatch(setErrorNull(null))} to={PAGE_ROUTES.REGISTRATION}>Зарегистрироваться</Link></div>
    </div>

  )
}

export default LoginForm