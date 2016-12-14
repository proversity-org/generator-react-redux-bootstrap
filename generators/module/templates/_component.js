'use strict';

import React, { PropTypes, Component } from 'react'

class <%= nameCapitalize %> extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2><%= nameCapitalize %></h2>
      </div>
    )
  }
}

<%= nameCapitalize %>.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default <%= nameCapitalize %>
