import React, { FormEvent, useState } from 'react'
import './styles.css'
import { useAppDispatch, useAppSelector } from '../../../redux-store/hooks'
import { loginAction } from '../../../redux-store/actions/auth'
import isValidEmail from '../../../utils/functions/validate-email'
import { getErrorStatus, getLoadingStatus } from '../../../redux-store/reducers/common-reducer/selectors'
import { PAGE_ROUTES } from '../../../utils/objects'
import { checkFormInputsFullness } from '../../../utils/functions/check-form-inputs-fullness'
import { setError, setErrorNull } from '../../../redux-store/reducers/common-reducer'
import ErrorNotification from '../../molecules/error-notification'
import InputCommon from '../../molecules/input-common'
import LabelCommon from '../../molecules/label-common'
import SubmitButton from '../../molecules/submit-button'
import FormTitle from '../../molecules/form-title'
import ShowPasswordButton from '../../molecules/show-password-button'
import FormLink from '../../molecules/form-link'

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

  const handleEmailChange = (value: string) => {
    setEmail(value)
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
  }

  return (
    <div className='LoginForm__Container'>
      <form onSubmit={(e) => handleFormSubmit(e)} className='CommonForm'>
        <FormTitle title='Авторизация' />

        {errors.length > 0 && <ErrorNotification errors={errors} />}

        <LabelCommon htmlfor='login' label='Электронная почта'>
          <InputCommon correctnessFlag={isEmailCorrect} name='login' onBlurHandler={handleEmailValidation} onChangeHandler={handleEmailChange} placeholder='Введите email' type='text' id='login' />
        </LabelCommon>

        <LabelCommon customClass='CommonForm__PasswordContainer' htmlfor='password' label='Пароль'>
          <InputCommon correctnessFlag={isPasswordHere} name='password' onBlurHandler={() => false} onChangeHandler={handlePasswordChange} placeholder='Введите пароль' type={isPasswordShown ? 'text' : 'password'} id='password' />
          <ShowPasswordButton isPasswordShown={isPasswordShown} onClickHandler={setIsPasswordShown} />
        </LabelCommon>

        <SubmitButton isLoading={isLoading} name='Войти' />
      </form>

      <FormLink addressWhereTo={PAGE_ROUTES.REGISTRATION} onClickHandler={() => dispatch(setErrorNull(null))} textWhatToDo='Зарегистрироваться' textWhy='Нет профиля?' />
    </div>

  )
}

export default React.memo(LoginForm)