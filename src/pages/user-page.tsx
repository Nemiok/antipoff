import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux-store/hooks'
import { useParams } from 'react-router-dom'
import { fetchSingleTeamMemberAction } from '../redux-store/actions/members'
import { clearSingleUser } from '../redux-store/reducers/single-user-reducer'
import HeroSingleUser from '../components/organisms/hero-single-user'
import { getUserAvatar, getUserEmail, getUserFirstName, getUserLastName } from '../redux-store/reducers/single-user-reducer/selectors'
import LoadingHandler from '../hoc/loading-handler'
import { PAGES_NAMES } from '../utils/objects'
import ContentSingleUser from '../components/organisms/content-single-user'

const UserPage = () => {

  const dispatch = useAppDispatch()

  const { userID } = useParams<{ userID: string }>()

  const userAvatar = useAppSelector(getUserAvatar)
  const userFirstName = useAppSelector(getUserFirstName)
  const userLastName = useAppSelector(getUserLastName)
  const userEmail = useAppSelector(getUserEmail)

  useEffect(() => {
    dispatch(fetchSingleTeamMemberAction(Number(userID)))

    return () => { dispatch(clearSingleUser()) }
  }, [])

  return (
    <article className='UserPage__Article'>
      <LoadingHandler currentPage={PAGES_NAMES.SINGLE_USER_PAGE}>
        <HeroSingleUser avatar={userAvatar} firstName={userFirstName} lastName={userLastName} />
        <ContentSingleUser email={userEmail} />
      </LoadingHandler>
    </article>
  )
}

export default UserPage