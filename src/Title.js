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
        <h1> Just Do it. </h1>
        <p> It's not going to finish itself. </p>
      </div>
    )
  }
}

export default Title;
