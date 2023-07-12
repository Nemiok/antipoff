import Loader from '../components/loader'
import React, { ReactNode } from 'react'
import { useAppSelector } from '../redux-store/hooks'
import { getPageLoadingStatus } from '../redux-store/reducers/team-page-reducer/selectors'
import { ILoadingStatus } from '../types/team-page'

interface ILoadingHandlerProps {
  children: ReactNode
}

const LoadingHandler = ({ children }: ILoadingHandlerProps) => {
  const calls_page_loading_status = useAppSelector(getPageLoadingStatus)

  if (calls_page_loading_status === ILoadingStatus.loading) {
    return <Loader />
  }

  return (
    <>
      {children}
    </>
  )
}

export default React.memo(LoadingHandler)