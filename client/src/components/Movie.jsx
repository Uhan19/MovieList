import React from 'react';
import ReactDOM from 'react-dom';

export function Movie(props) {
    return (
      <li>{props.movie.title}</li>
    )
}