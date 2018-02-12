import React from 'react';
import ReactDOM from 'react-dom';

export function Movie(props) {
    return (
      <li onClick={props.click}>{props.movie.title}, {props.state ? <a>{props.movie.description}</a> : null}</li>
    )
}