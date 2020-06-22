import React from 'react';

const Display = (props) => {
  return (
    <div>
      <h1 id="main-display">{props.counter * props.multiplier}</h1>
    </div>
  );
};

export default Display;