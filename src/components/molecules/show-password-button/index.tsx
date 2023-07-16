import React from 'react'
import './styles.css'
import { SVG_ICONS } from '../../../assets/images/svg-icons'

interface IShowPasswordButton {
  onClickHandler: (flag: boolean) => void,
  isPasswordShown: boolean
}

const ShowPasswordButton = ({ isPasswordShown, onClickHandler }: IShowPasswordButton) => {
  return (
    <div className='ShowPasswordButton' onClick={() => onClickHandler(!isPasswordShown)}>{isPasswordShown ? SVG_ICONS.EYE_OPEN : SVG_ICONS.EYE_CLOSED}</div>

  )
}

export default React.memo(ShowPasswordButton)