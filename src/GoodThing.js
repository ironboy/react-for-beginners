import React from 'react';

export default props => {

  const edit = () => {
    console.log('You clicked edit!');
  }

  return (
    <p className="good-thing">
      <span>{props.name}</span>
      {props.prio}
      <button onClick={edit}>Edit</button>
    </p>
  )
}