
/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react'
import TestUtils from 'react-dom/lib/ReactTestUtils'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from 'containers/App';
import rootReducer from 'reducers'

const store = createStore(rootReducer);

describe('App', () => {
  it('renders without problems', () => {
    var appTest = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(appTest).to.exist;
  })
})