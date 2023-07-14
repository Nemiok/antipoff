import React from 'react'
import './styles.css'

interface IErrorNotification {
  errors: string[]
}

const ErrorNotification = ({ errors }: IErrorNotification) => {
  return (
    <div className='ErrorNotification__Container'>
      <ul className='ErrorNotification__List'>
        {errors.map(err => (
          <li className='ErrorNotification__Item' key={Math.random()}>{err}</li>
        ))}
      </ul>
    </div>
  )
}

export default ErrorNotification