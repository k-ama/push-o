import React from 'react';
import './App.css';
import Counter from '../Counter/Counter';
import Toggle from '../Toggle/Toggle'
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../store/actions';

const blue = {
  r:70,
  g:130,
  b:180
}

const pink = {
  r:141,
  g:2,
  b:31
}

function App() {

  const dispatch = useDispatch()
  const handleToggleOnChange = (value: any) => {
     dispatch(value.value? Actions.setOff(): Actions.setOn())
  }
  return (
    <div className="App">
      <Counter
        minColor={blue}
        maxColor={pink}
      />
      <Toggle onChange={handleToggleOnChange}/>
    </div>
  );
}

export default App;
