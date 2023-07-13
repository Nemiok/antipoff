import React from 'react'
import './styles.css'

const LoginForm = () => {
  return (
    <form>
      <h1>Авторизация</h1>

      <label htmlFor="login">
        <div>Имя</div>
        <input type="text" id='login' name='login' />
      </label>

      <label htmlFor="password">
        <div>Пароль</div>
        <input type="password" id='password' name='password' />
      </label>
    </form>
  )
}

export default LoginForm