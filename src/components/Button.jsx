import React from 'react';

function Button(props) {
  return (
    <a href={props.link} target="_blank">{props.name}</a>
  );
}

export default Button;