import React from 'react';
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

  goodThings.sort((a, b) =>  a.prio < b.prio ? -1 : 1);

  return (
    <div className="App">
      <header className="App-header">
        <button>Sort</button>
        {goodThings.map((thing, index) => (
          <GoodThing 
            key={index} 
            {...thing}
          />
        ))}
      </header>
    </div>
  );
}
