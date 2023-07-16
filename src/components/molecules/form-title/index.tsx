import React from 'react'
import './styles.css'

interface IFormTitle {
  title: string
}

const FormTitle = ({ title }: IFormTitle) => {
  return (
    <h1 className='FormTitle'>{title}</h1>

  )
}

export default React.memo(FormTitle)