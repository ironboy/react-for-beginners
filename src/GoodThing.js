import React from 'react';

export default props => {
  console.log(props);
  return (
    <p className="good-thing">
      <span>{props.name}</span>
      {props.prio}
    </p>
  )
}