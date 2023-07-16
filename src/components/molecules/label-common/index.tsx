import React, { ReactNode } from 'react'
import './styles.css'

interface ILabelCommon {
  children: ReactNode,
  label: string,
  htmlfor: string,
  customClass?: string
}

const LabelCommon = ({ children, htmlfor, label, customClass }: ILabelCommon) => {
  return (
    <label className={`LabelCommon ${customClass}`} htmlFor={htmlfor}>
      <div>{label}</div>
      {children}
    </label>
  )
}

export default React.memo(LabelCommon)