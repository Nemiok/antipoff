import React, { useState } from 'react'
import './styles.css'
import { SVG_ICONS } from '../../../assets/images/svg-icons';
import { useNavigate } from 'react-router-dom';
import { PAGE_ROUTES } from '../../../utils/objects';

interface IMemberCard {
  avatar: string,
  firstName: string,
  lastName: string,
  email: string,
  id: number
}

const MemberCard = ({ avatar, email, firstName, lastName, id }: IMemberCard) => {
  const [liked, setLiked] = useState(false);

  const navigate = useNavigate()

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLiked(!liked)
  }

  const handleMemberClick = () => {
    navigate(`${PAGE_ROUTES.TEAM}/${id}`)
  }

  return (
    <li onClick={handleMemberClick} className='MemberCard'>
      <img src={avatar} alt="member`s avatar" />
      <div>{firstName} {lastName}</div>
      <button onClick={(e) => handleLike(e)} className='MemberCard__LikeButton'>
        {liked ? SVG_ICONS.LIKED : SVG_ICONS.NOT_LIKED}
      </button>
    </li>
  )
}

export default MemberCard