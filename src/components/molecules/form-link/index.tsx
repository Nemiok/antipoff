import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

interface FormLink {
  textWhy: string,
  textWhatToDo: string,
  addressWhereTo: string,
  onClickHandler: () => void
}

const FormLink = ({ addressWhereTo, onClickHandler, textWhatToDo, textWhy }: FormLink) => {
  return (
    <div className='FormLink'>{textWhy} <Link onClick={onClickHandler} to={addressWhereTo}>{textWhatToDo}</Link></div>

  )
}

export default React.memo(FormLink)