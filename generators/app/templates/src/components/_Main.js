'use strict';

import React, { PropTypes, Component } from 'react'

export default class Main extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>RereBoo</h2>
        <p>Your current app includes React, Redux, React Router, React Bootstrap and Webpack.</p>
      </div>
    )
  }
}

Main.propTypes = {}
