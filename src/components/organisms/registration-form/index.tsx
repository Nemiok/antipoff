import React, { FormEvent, useEffect, useRef, useState } from 'react'
import './styles.css'
import { useAppDispatch, useAppSelector } from '../../../redux-store/hooks'
import { registrationAction } from '../../../redux-store/actions/auth'
import isValidEmail from '../../../utils/functions/validate-email'
import { getAuthorizationStatus, getErrorStatus, getLoadingStatus } from '../../../redux-store/reducers/common-reducer/selectors'
import { AuthorizationStatus, PAGE_ROUTES } from '../../../utils/objects'
import { checkFormInputsFullness } from '../../../utils/functions/check-form-inputs-fullness'
import { setError, setErrorNull } from '../../../redux-store/reducers/common-reducer'
import ErrorNotification from '../../molecules/error-notification'
import { useNavigate } from 'react-router-dom'
import { isStringOfLetters } from '../../../utils/functions/is-string-of-letters'
import { checkPasswordStrength } from '../../../utils/functions/check-password-strength'
import InputCommon from '../../molecules/input-common'
import LabelCommon from '../../molecules/label-common'
import FormTitle from '../../molecules/form-title'
import ShowPasswordButton from '../../molecules/show-password-button'
import SubmitButton from '../../molecules/submit-button'
import FormLink from '../../molecules/form-link'

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

    const areFieldsFull = checkFormInputsFullness(e.target as HTMLFormElement)

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

  const handleNameBlur = (value: string) => {
    setIsNameCorrect(isStringOfLetters(value))
  }

  return (
    <div className='LoginForm__Container'>
      <form onSubmit={(e) => { handleFormSubmit(e) }} className='CommonForm'>
        <FormTitle title='Регистрация' />

        {errors.length > 0 && <ErrorNotification errors={errors} />}

        <LabelCommon htmlfor='name' label='Имя'>
          <InputCommon correctnessFlag={isNameCorrect} name='name' onBlurHandler={handleNameBlur} onChangeHandler={() => false} placeholder='Введите имя' type='text' id='name' />
        </LabelCommon>

        <LabelCommon htmlfor='login' label='Электронная почта'>
          <InputCommon correctnessFlag={isEmailCorrect} name='login' onBlurHandler={handleEmailValidation} onChangeHandler={setEmail} placeholder='Введите email' type='text' id='login' />
        </LabelCommon>

        <LabelCommon customClass='CommonForm__PasswordContainer' htmlfor='password' label='Пароль'>
          <InputCommon inputRef={passwordRef} correctnessFlag={isPasswordStrong} name='password' onBlurHandler={() => false} onChangeHandler={handlePasswordChange} placeholder='Введите пароль' type={isPasswordShown ? 'text' : 'password'} id='password1' />
          <ShowPasswordButton isPasswordShown={isPasswordShown} onClickHandler={setIsPasswordShown} />
        </LabelCommon>

        <LabelCommon customClass='CommonForm__PasswordContainer' htmlfor='password' label='Подтвердите пароль'>
          <InputCommon inputRef={passwordRefCopy} correctnessFlag={isPasswordStrong} name='password' onBlurHandler={() => false} onChangeHandler={handlePasswordChange} placeholder='Введите пароль' type={isPasswordShown ? 'text' : 'password'} id='password2' />
          <ShowPasswordButton isPasswordShown={isPasswordShown} onClickHandler={setIsPasswordShown} />
        </LabelCommon>

        <SubmitButton isLoading={isLoading} name='Зарегистрироваться' />
      </form>
      <FormLink addressWhereTo={PAGE_ROUTES.LOGIN} onClickHandler={() => dispatch(setErrorNull(null))} textWhatToDo='Войти' textWhy='Уже зарегистрированы?' />
    </div>

  )
}

export default React.memo(RegistrationForm)