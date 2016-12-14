
'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'

import <%= nameCapitalize %> from '../components/<%= nameCapitalize %>'

<% if (createAction) { %>
import {
  create<%= nameCapitalize %>,
  get<%= nameCapitalize %>,
  update<%= nameCapitalize %>,
  delete<%= nameCapitalize %>
} from 'actions/<%= name %>'
<% } %>

class Async<%= nameCapitalize %> extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    // this.props.dispatch(get<%= nameCapitalize %>())
  }

  componentWillMount () {
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <<%= nameCapitalize %> dispatch={this.props.dispatch} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

Async<%= nameCapitalize %>.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    isCreating: state.rootReducer.<%= name %>.isCreating || false,
    isFetching: state.rootReducer.<%= name %>.isFetching || false,
    isUpdating: state.rootReducer.<%= name %>.isUpdating || false,
    isDeleting: state.rootReducer.<%= name %>.isDeleting || false,
  }
}

export default connect(mapStateToProps)(Async<%= nameCapitalize %>)