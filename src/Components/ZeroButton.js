import React from 'react';

const ZeroButton = (props) => {
  return (
    <div className="col">
      <button className="btn zero-btn"
        onClick={props.handleClick}>
          <i class="fas fa-angle-double-down"></i>
      </button>
    </div>
  );
};

export default ZeroButton;