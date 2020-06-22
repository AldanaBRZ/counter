import React from 'react';

const NumberDisplay = (props) => {
  return (
    <div className="col">
      <h1>{props.number}</h1>
    </div>
  );
};

export default NumberDisplay;