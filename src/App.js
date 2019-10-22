import React from 'react';
import logo from './logo.svg';
import './App.css';

import GoodThing from './GoodThing';

export default () => {

  let goodThings = [
    {name: 'Food', prio: 5},
    {name: 'Coffee', prio: 4},
    {name: 'Programming', prio: 2},
    {name: 'My kids', prio: 1},
    {name: 'Music', prio: 3}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {goodThings.map((thing, index) => (
          <GoodThing 
            key={index} 
            name={thing.name}
            prio = {thing.prio}
          />
        ))}
      </header>
    </div>
  );
}
