import React from 'react';

export default props => {
  console.log(props);
  return (
    <p>
      {props.name}
    </p>
  )
}