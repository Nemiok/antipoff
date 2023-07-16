import React from 'react'
import './styles.css'

interface IHeroSingleUser {
  firstName: string,
  lastName: string,
  avatar: string
}

const HeroSingleUser = ({ firstName, lastName, avatar }: IHeroSingleUser) => {
  return (
    <section className='HeroSingleUser__Container'>
      <img className='HeroSingleUser__Avatar' src={avatar} alt="user avatar" />
      <div className='HeroSingleUser__Content'>
        <h1 className='HeroSingleUser__Title'>{firstName} {lastName}</h1>

        <p className='HeroSingleUser__Paragraph'>
          Партнер
        </p>
      </div>
    </section>
  )
}

export default React.memo(HeroSingleUser)