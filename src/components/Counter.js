//import React, { Component } from 'react';
import React from 'react';
import './App.css';
//import Counter from './Counter';

const Counter = (props) => {
  
    let index = props.index;

    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => props.changeScore(index, -1)}> - </button>
            <span className="counter-score">{ props.score }</span>
            <button className="counter-action increment" onClick={() => props.changeScore(index, 1)}> + </button>
        </div>
    );
}

export default Counter;