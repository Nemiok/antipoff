import Loader from '../components/molecules/loader'
import React, { ReactNode } from 'react'
import { useAppSelector } from '../redux-store/hooks'
import { getTeamPageLoadingStatus } from '../redux-store/reducers/team-page-reducer/selectors'
import { LoadingStatus, PAGES_NAMES } from '../utils/objects'
import { getSinglePageLoadingStatus } from '../redux-store/reducers/single-user-reducer/selectors'

interface ILoadingHandlerProps {
  currentPage: string,
  children: ReactNode
}

const LoadingHandler = ({ currentPage, children }: ILoadingHandlerProps) => {

  let loadingStatus

  switch (currentPage) {
    case PAGES_NAMES.TEAM_PAGE: {
      loadingStatus = useAppSelector(getTeamPageLoadingStatus)
      console.log(loadingStatus, 'members')
      break
    }
    case PAGES_NAMES.SINGLE_USER_PAGE: {
      loadingStatus = useAppSelector(getSinglePageLoadingStatus)
      console.log(loadingStatus, 'user')
      break
    }
    default: loadingStatus = 'idle'
  }

  if (loadingStatus === LoadingStatus.loading) {
    return <Loader />
  }
  return (
    <>
      {children}
    </>
  )
}

export default React.memo(LoadingHandler)