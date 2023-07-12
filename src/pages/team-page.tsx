import React, { useEffect } from 'react'
import { useAppDispatch } from '../redux-store/hooks';
import LoadingHandler from '../hoc/loading-handler';

const TeamPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {

  }, [])

  return (
    <LoadingHandler>
    </LoadingHandler>
  )
}

export default React.memo(TeamPage) 