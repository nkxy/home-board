import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './Title.css';

class Title extends Component {
  constructor() {
    super();
  }
  render () {
    return (
      <div>
        <h1> Hello! This is a basic To-Do List. </h1>
        <p> Simply Put in what you need to do underneath. </p>
      </div>
    )
  }
}

export default Title;
