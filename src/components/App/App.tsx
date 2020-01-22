import React from 'react';
import './App.css';
import Counter from '../Counter/Counter';
import Toggle from '../Toggle/Toggle'

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
  return (
    <div className="App">
      <div>
        <Counter
          minColor={blue}
          maxColor={pink}
        />
      </div>
      <div>
         <Toggle/>
      </div>
    </div>
  );
}

export default App;
