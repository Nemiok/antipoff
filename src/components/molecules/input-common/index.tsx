import React, { HTMLInputTypeAttribute, RefObject } from 'react'
import './styles.css'

interface IInputCommon {
  onBlurHandler: (value: string) => void,
  onChangeHandler: (value: string) => void,
  type: HTMLInputTypeAttribute,
  id?: string,
  name: string,
  placeholder: string,
  correctnessFlag: boolean,
  inputRef?: RefObject<HTMLInputElement>
}

const InputCommon = ({ correctnessFlag, name, onChangeHandler, placeholder, type, id, onBlurHandler, inputRef }: IInputCommon) => {
  console.log(correctnessFlag)
  return (
    <input ref={inputRef} className={`${!correctnessFlag && 'CommonInput_error'} CommonInput`} onBlur={(e) => onBlurHandler(e.currentTarget.value)} onChange={(e) => onChangeHandler(e.target.value)} type={type} id={id} name={name} placeholder={placeholder} />
  )
}

export default React.memo(InputCommon)