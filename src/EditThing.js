import React from "react";

export default props => {

  const submitChange = e => {
    // prevent form submit from reloading page
    e.preventDefault();
  }

  return (
    <form onSubmit={submitChange}>
      <input type="text" value={props.name} />
      <input type="number" value={props.prio} min="1" max="5" />
      <button role="button" onClick={props.cancelEdit}>Cancel</button>
      <button>Change</button>
    </form>
  );
}