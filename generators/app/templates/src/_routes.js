

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import AsyncPlaceholder from './containers/AsyncPlaceholder'
// ----- yeoman hook import routes -----


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={AsyncPlaceholder} />
	{/* ----- yeoman hook routes ----- */}
  </Route>
)

export default routes