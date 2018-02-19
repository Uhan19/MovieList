import React from 'react';
import ReactDOM from 'react-dom';

export function Search(props) {
    return (
        <input id="search" type="text" onKeyUp={props.search} placeholder='Tell me what you want'/>
    )
}