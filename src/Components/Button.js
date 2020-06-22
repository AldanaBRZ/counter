import React from 'react';

const Button = (props) => {
  return (
    <div className="col">
      <button className="btn"
        onClick={props.handleClick}>
          <i className={`fas fa-angle-${props.action}`}></i>
      </button>
    </div>
  );
};

export default Button;