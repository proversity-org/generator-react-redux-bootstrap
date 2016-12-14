'use strict';

import React, { PropTypes, Component } from 'react'

class Placeholder extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>RereBoo</h2>
        <p>Inclues React, Redux, React Router, React Bootstrap and Webpack.</p>
        <hr />
        <p>To create a new module in terminal: yo:rereboo:module</p>
        <p>This will create 4 files (action, reducer, container, component)</p>
        <p>and they mimic CRUD actions.</p>
        <hr />
        <p>Feel free to delete AsyncPlaceholder.js and Placeholder.js (just update routes.js)</p>
      </div>
    )
  }
}

Placeholder.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default Placeholder
