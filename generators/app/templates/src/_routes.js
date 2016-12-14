

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import AsyncMain from './containers/AsyncMain'


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={AsyncMain} />
  </Route>
)

export default routes