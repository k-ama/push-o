import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from '../../store/actions'
import './Counter.css';
import Color from '../../types/Color'
import { computeRBGTarget } from '../../utils/utils'
import { toggleStateSelector, countSelector } from '../../store/selector'


export const Counter = (props: { minColor: Color, maxColor: Color}) => {
  const dispatch = useDispatch()
  const count = useSelector(countSelector)
  const toggleState = useSelector(toggleStateSelector)

  const countTimeout = setTimeout(() => {
    if (!toggleState) {
      return
    }
    if (count > 0) {
      dispatch(Actions.timeout())
    }
  }, 1000)
  const onCountChange = () => {
    if (!toggleState) {
      return
    }
    if (count < 100) {
      clearTimeout(countTimeout)
      dispatch(Actions.userPush())
    }
 }

  const {
    r,
    g,
    b
  } = computeRBGTarget(props.minColor, props.maxColor, count)

  return (
    <div className="Counter">
      <div
        className="Counter-button"
        style={{backgroundColor:`rgb(${r},${g},${b})`}} // eslint-disable-line
        onClick={onCountChange}>
      </div>
    </div>
  );
}

export default Counter;
