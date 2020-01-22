import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from '../../store/actions'
import './Toggle.css';

export const Toggle = () => {

  return (
    <div className="Toggle">
      <label className="Toggle-label">
        <input type="checkbox"/>
        <span></span>
      </label>
    </div>
  );
}

export default Toggle;
