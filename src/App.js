import React, { useState, useEffect } from 'react';
import './App.css';

import GoodThing from './GoodThing';
import EditThing from './EditThing';

export default () => {

  const [goodThings, setGoodThings] = useState([]);
  const [sortOrder, setSortOrder] = useState('unsorted');
  const [editId, setEditId] = useState(null);

  const getData = async () => {
    // wait until we have the raw data from the resource
    let rawData = await fetch('/good-things.json');
    // wait for it to get converted to a javascript 
    // data structure (unpack from json)
    let data = await rawData.json();
    // set good things to the data
    setGoodThings(data);
  };

  useEffect(() => {
    // If no goodThings, then get some good things
    if(goodThings.length === 0){
      getData();
    }
  });

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

  const editAThing = (id) => {
    setEditId(id);
  }

  const makeChange = (id, name, prio) => {
    // find the thing to change
    let theThing = goodThings.filter(thing => thing.id === id)[0];
    // set the new values
    theThing.name = name;
    theThing.prio = prio;
    // close/remove the edit form
    setEditId(null);
  }

  const cancelEdit = e => {
    e.preventDefault();
    // close/remove the edit form
    setEditId(null);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={sort}>
          {sortOrder !== 'ascending' ?
            'Sort most important first' :
            'Sort least important first'
          }
        </button>
        {goodThings.map(thing =>
          thing.id !== editId ? (
            <GoodThing
              key={thing.id}
              {...{...thing, editAThing}}
            />) : (
            <EditThing 
              key={thing.id}
              {...{...thing, makeChange, cancelEdit}}
            />
          )
        )}
      </header>
    </div>
  );
}
