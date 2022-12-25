import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './components/application/application';
import { Skills } from './components/skills/skills';
import { Counter } from './components/counter/counter';
import { Greet } from './components/greet/greet';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Application/>
      <Skills/>
      <Counter/>
    </div>
  );
}

export default App;
