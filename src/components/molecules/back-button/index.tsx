import React from 'react'
import { useNavigate } from 'react-router-dom'
import useScreenWidth from '../../../hooks/useScreenWidth'
import { SVG_ICONS } from '../../../assets/images/svg-icons'
import './styles.css'

const BackButton = () => {
  const navigate = useNavigate()
  const screnWidth = useScreenWidth()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <button onClick={handleClick} className='BackButton'>{
      screnWidth >= 769 ? 'Назад' :
        SVG_ICONS.BACK_ICON
    }</button>
  )
}

export default React.memo(BackButton)