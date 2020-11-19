import React, { useState, useEffect } from 'react';
import NumberButton from './Components/NumberButton';
import ToolButton from './Components/ToolButton';
import Display from './Components/Display';
import './Components/main.css';

function App() {

  return (
    <div className="App">
      <div className="display-wrapper">
        <Display />
      </div>
      <div className="buttons-wrapper">
        <div className="row">
          <ToolButton class={'misc'} tool={'AC'}/>
          <ToolButton class={'misc'} tool={'+/-'}/>
          <ToolButton class={'misc'} tool={'%'}/>
          <ToolButton class={'operator'} tool={'/'}/>
        </div>
        <div className="row">
          <NumberButton number={7}/>
          <NumberButton number={8}/>
          <NumberButton number={9}/>
          <ToolButton class={'operator'} tool={'X'}/>
        </div>
        <div className="row">
          <NumberButton number={4}/>
          <NumberButton number={5}/>
          <NumberButton number={6}/>
          <ToolButton class={'operator'} tool={'-'}/>
        </div>
        <div className="row">
          <NumberButton number={1}/>
          <NumberButton number={2}/>
          <NumberButton number={3}/>
          <ToolButton class={'operator'} tool={'+'}/>
        </div>
        <div className="row">
          <NumberButton number={0}/>
          <NumberButton number={'.'}/>
          <ToolButton class={'operator'} tool={'='}/>
        </div>
      </div>
    </div>
  );
}

export default App;
