import React, { FormEvent, useEffect, useRef, useState } from 'react'
import './styles.css'
import { useAppDispatch, useAppSelector } from '../../../redux-store/hooks'
import { registrationAction } from '../../../redux-store/actions/auth'
import isValidEmail from '../../../utils/functions/validate-email'
import { getAuthorizationStatus, getErrorStatus, getLoadingStatus } from '../../../redux-store/reducers/common-reducer/selectors'
import { AuthorizationStatus, LoadingStatus, PAGE_ROUTES } from '../../../utils/objects'
import { SVG_ICONS } from '../../../assets/images/svg-icons'
import { checkFormInputsFullness } from '../../../utils/functions/check-form-inputs-fullness'
import { setError, setErrorNull } from '../../../redux-store/reducers/common-reducer'
import ErrorNotification from '../../molecules/error-notification'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { isStringOfLetters } from '../../../utils/functions/is-string-of-letters'
import { checkPasswordStrength } from '../../../utils/functions/check-password-strength'

const RegistrationForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailCorrect, setIsEmailCorrect] = useState(true)
  const [isNameCorrect, setIsNameCorrect] = useState(true)
  const [isPasswordStrong, setIsPasswordStrong] = useState(true)
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordRefCopy = useRef<HTMLInputElement>(null);

  const isLoading = useAppSelector(getLoadingStatus)
  const errors = useAppSelector(getErrorStatus)
  const authStatus = useAppSelector(getAuthorizationStatus)

  const navigate = useNavigate()

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(PAGE_ROUTES.LOGIN)
    }
  }, [authStatus])

  const dispatch = useAppDispatch()

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const areFieldsFull: boolean = checkFormInputsFullness(e.target as HTMLFormElement)

    if (!areFieldsFull) return dispatch(setError(['Заполните все поля']))

    if (!isPasswordStrong) {
      return dispatch(setError(['Пароль должен иметь длину не менее 8 символов', 'Пароль должен содержать большие и маленькие буквы', 'Пароль должен иметь специальные символы']))
    }

    dispatch(registrationAction({ email, password }))
  }

  const handleEmailValidation = (value: string) => {
    if (!isValidEmail(value)) setIsEmailCorrect(false)
    else setIsEmailCorrect(true)
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)

    if (passwordRef.current?.value !== passwordRefCopy.current?.value) {
      return setIsPasswordStrong(false)
    }

    setIsPasswordStrong(checkPasswordStrength(value))
  }

  return (
    <div className='LoginForm__Container'>
      <form onSubmit={(e) => { handleFormSubmit(e) }} className='LoginForm'>
        <h1 className='LoginForm__Title'>Регистрация</h1>

        {errors.length > 0 && <ErrorNotification errors={errors} />}

        <label htmlFor="name">
          <div className='LoginForm__NameLabel LoginForm__Label'>Имя</div>
          <input className={!isNameCorrect ? 'errorInput' : ''} onBlur={(e) => setIsNameCorrect(isStringOfLetters(e.target.value))} type="text" id='name' name='name' placeholder='Введите имя' />
        </label>

        <label htmlFor="login">
          <div className='LoginForm__NameLabel LoginForm__Label'>Электронная почта</div>
          <input className={!isEmailCorrect ? 'errorInput' : ''} onBlur={(e) => handleEmailValidation(e.target.value)} onChange={(e) => setEmail(e.target.value)} type="text" id='login' name='login' placeholder='Введите email' />
        </label>

        <label className='LoginForm__PasswordContainer' htmlFor="password">
          <div className='LoginForm__PasswordLabel LoginForm__Label'>Пароль</div>
          <input ref={passwordRef} className={!isPasswordStrong ? 'errorInput' : ''} onChange={(e) => handlePasswordChange(e.target.value)} type={isPasswordShown ? 'text' : 'password'} name='password' placeholder='Введите пароль' />
          <div className='LoginForm__ShowPasswordButton' onClick={() => setIsPasswordShown(!isPasswordShown)}>{isPasswordShown ? SVG_ICONS.EYE_OPEN : SVG_ICONS.EYE_CLOSED}</div>
        </label>

        <label className='LoginForm__PasswordContainer' htmlFor="password">
          <div className='LoginForm__PasswordLabel LoginForm__Label'>Подтвердите пароль</div>
          <input ref={passwordRefCopy} className={!isPasswordStrong ? 'errorInput' : ''} onChange={(e) => handlePasswordChange(e.target.value)} type={isPasswordShown ? 'text' : 'password'} name='password' placeholder='Повторите пароль' />
          <div className='LoginForm__ShowPasswordButton' onClick={() => setIsPasswordShown(!isPasswordShown)}>{isPasswordShown ? SVG_ICONS.EYE_OPEN : SVG_ICONS.EYE_CLOSED}</div>
        </label>

        <button disabled={isLoading === LoadingStatus.loading} className='LoginForm__SubmitButton'>{isLoading === LoadingStatus.loading ? 'Загрузка...' : 'Зарегистрироваться'}</button>
      </form>
      <div className='LoginForm__RegistrationLink'>Уже зарегистрированы? <Link onClick={() => dispatch(setErrorNull(null))} to={PAGE_ROUTES.LOGIN}>Войти</Link></div>
    </div>

  )
}

export default RegistrationForm