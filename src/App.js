import React from 'react';
import logo from './logo.svg';
import './App.css';

import GoodThing from './GoodThing';

export default () => {

  let goodThings = [
    'Food',
    'Coffee',
    'Programming',
    'Cats',
    'Music'
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {goodThings.map((thing, index) => (
          <GoodThing key={index} name={thing} />
        ))}
      </header>
    </div>
  );
}
