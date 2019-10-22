import React, { useState } from 'react';
import './App.css';

import GoodThing from './GoodThing';

export default () => {

  const [goodThings, setGoodThings] = useState([
    { name: 'Food', prio: 5 },
    { name: 'Coffee', prio: 4 },
    { name: 'Programming', prio: 2 },
    { name: 'My kids', prio: 1 },
    { name: 'Music', prio: 3 }
  ]);

  const [sortOrder, setSortOrder] = useState('unsorted');

  const sort = () => {
    // change the sortOrder and sort according to it
    // using a newSortOrder variable since a setSortOrder
    // does not change sortOrder directly (first after rendering)
    let newSortOrder = sortOrder !== 'ascending' ?
      'ascending' : 'descending';
    let [x, y] = newSortOrder === 'ascending' ? [-1, 1] : [1, -1];
    setGoodThings(
      [...goodThings].sort((a, b) => a.prio < b.prio ? x : y)
    );
    setSortOrder(newSortOrder);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={sort}>
          {sortOrder !== 'ascending' ?
            'Sort most important first' :
            'Sort least important first'
          }
        </button>
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
