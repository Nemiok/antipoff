import React from 'react'

interface IErrorPageProps {
  message: string,
  code: string | undefined
}

function ErrorPage({ message, code }: IErrorPageProps) {

  return (
    <div>
      <h1>Произошла ошибка!</h1>
      <h2>{message}</h2>
      <h2>{code}</h2>
    </div>
  )
}
// return <div>'Something goes wrong!'</div>


export default React.memo(ErrorPage)