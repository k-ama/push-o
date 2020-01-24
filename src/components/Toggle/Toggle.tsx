import React, { useState } from "react";
import './Toggle.css';

export const Toggle = (props:any) => {
  const [on, setOn] = useState(true)
  const classNameOn = `Toggle${ on ? ' Toggle-on':''}`
  const onIndicatorClick = () => {
    if (props.onChange) {
      props.onChange({ value: !on })
    }
    setOn(!on)
  }
  return (
    <div className={classNameOn}>
      <div
        className='Toggle-indicator'
        onClick={onIndicatorClick} />
     </div>
  )
}

export default Toggle;
