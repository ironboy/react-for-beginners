import React from 'react';

export default props => {

  const edit = () => {
    // I can call the component above me
    // because it gave me a function to call
    // amongst my props
    props.editAThing(props.id);
  }

  return (
    <p className="good-thing">
      <span>{props.name}</span>
      {props.prio}
      <button onClick={edit}>Edit</button>
    </p>
  )
}