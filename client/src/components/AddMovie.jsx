import React from 'react';
import ReactDOM from 'react-dom';

export function AddMovie(props) {
    return(
        <input id="add" type="text" onKeyUp={props.add} placeholder='Add here'/>
    )
}