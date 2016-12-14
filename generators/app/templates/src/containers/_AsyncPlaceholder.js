'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'

import Placeholder from '../components/Placeholder'

class AsyncPlaceholder extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
  }

  componentWillMount () {
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6} smOffset={3}>
            <Placeholder dispatch={this.props.dispatch} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

AsyncPlaceholder.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(AsyncPlaceholder)