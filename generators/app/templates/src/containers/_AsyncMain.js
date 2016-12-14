'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import { Grid, Row, Col } from 'react-bootstrap'

import Main from '../components/Main'

class AsyncMain extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6} smOffset={3}>
            <Main />
          </Col>
        </Row>
      </Grid>
    )
  }
}

AsyncMain.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(AsyncMain)