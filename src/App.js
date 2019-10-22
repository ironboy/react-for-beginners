import React, {useState} from 'react';
import './App.css';

import GoodThing from './GoodThing';

export default () => {

  const [goodThings, setGoodThings] = useState([
    {name: 'Food', prio: 5},
    {name: 'Coffee', prio: 4},
    {name: 'Programming', prio: 2},
    {name: 'My kids', prio: 1},
    {name: 'Music', prio: 3}
  ]);

  const sort = () => {
    // sort a copy of goodThings and set the new state/value
    // of goodThings to that of the sorted copy
    setGoodThings(
      [...goodThings].sort((a, b) =>  a.prio < b.prio ? -1 : 1)
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={sort}>Sort</button>
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
