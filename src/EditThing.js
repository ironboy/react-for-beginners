import React, {useRef} from "react";

export default props => {

  const submitChange = e => {
    // prevent form submit from reloading page
    e.preventDefault();
    props.makeChange(
      props.id, 
      nameInput.current.value,
      prioInput.current.value
    );
  }

  const nameInput = useRef();
  const prioInput = useRef();

  return (
    <form onSubmit={submitChange}>
      <input type="text" ref={nameInput} 
        defaultValue={props.name} />
      <input type="number" ref={prioInput} 
        defaultValue={props.prio} min="1" max="5" />
      <button onClick={props.cancelEdit}>Cancel</button>
      <button>Change</button>
    </form>
  );
}