import React from "react";
import './index.css';

export default function Button(props) {
  return (
      <button
      onClick={ props.clicked }
      type={ props.type || 'button' }
      className={`btn btn-${props.variant} ${props.block ? 'btn-block':''}`}
      disabled={ props.disabled || false }
    >
          {props.text}
      </button>
  );
}
