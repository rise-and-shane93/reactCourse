//import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import './App.css';

const Header = ({ players, title }) => {
  return (
      <header>
        <Stats players={players}/>
        <h1>{ title }</h1>
        {/* <span className="stats">Players: { props.totalPlayers }</span> */}
        <Stopwatch />
      </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};

Header.defaultProps = {
  title: 'Scoreboard'
};

export default Header;
