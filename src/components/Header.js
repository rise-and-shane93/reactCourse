import React, { Component } from 'react';
import './App.css';

const Header = (props) => {
  return (
      <header>
          <h1>{ props.title }</h1>
          <span className="stats">Players: { props.totalPlayers }</span>
      </header>
  );
}

export default Header;
