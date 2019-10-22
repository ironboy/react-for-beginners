import React from 'react';

export default props => {
  console.log(props);
  return (
    <p>
      <span>{props.name}</span>
      {props.prio}
    </p>
  )
}