import React from 'react'
import { LoadingStatus } from '../../../utils/objects'
import './styles.css'

interface ISubmitButton {
  isLoading: LoadingStatus,
  name: string
}

const SubmitButton = ({ isLoading, name }: ISubmitButton) => {
  return (
    <button disabled={isLoading === LoadingStatus.loading} className='SubmitButton'>{isLoading === LoadingStatus.loading ? 'Загрузка...' : name}</button>

  )
}

export default React.memo(SubmitButton)