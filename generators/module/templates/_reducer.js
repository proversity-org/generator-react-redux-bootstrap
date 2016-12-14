
'use strict';

import {
  REQUEST_CREATE_<%= nameUppercase %>, RECEIVE_CREATE_<%= nameUppercase %>,
  REQUEST_GET_<%= nameUppercase %>S, RECEIVE_GET_<%= nameUppercase %>S,
  REQUEST_GET_<%= nameUppercase %>, RECEIVE_GET_<%= nameUppercase %>,
  REQUEST_UPDATE_<%= nameUppercase %>, RECEIVE_UPDATE_<%= nameUppercase %>,
  REQUEST_DELETE_<%= nameUppercase %>, RECEIVE_DELETE_<%= nameUppercase %>,
} from 'actions/<%= name %>s'

export default function <%= name %>s(state = {
  isCreating: false,
  isFetching: false,
  isUpdating: false,
  isDeleting: false
  // Other variables
}, action) {
  switch (action.type) {
    case REQUEST_CREATE_<%= nameUppercase %>:
      return Object.assign({}, state, {
        isCreating: true
      })
    case REQUEST_GET_<%= nameUppercase %>S:
      return Object.assign({}, state, {
        isFetching: true
      })
    case REQUEST_GET_<%= nameUppercase %>:
      return Object.assign({}, state, {
        isFetching: true
      })
    case REQUEST_UPDATE_<%= nameUppercase %>:
      return Object.assign({}, state, {
        isUpdating: true
      })
    case REQUEST_DELETE_<%= nameUppercase %>:
      return Object.assign({}, state, {
        isDeleting: true
      })
    case RECEIVE_CREATE_<%= nameUppercase %>:
      return Object.assign({}, state, {
        isCreating: false
      })
    case RECEIVE_GET_<%= nameUppercase %>S:
      return Object.assign({}, state, {
        isFetching: false
      })
    case RECEIVE_GET_<%= nameUppercase %>:
      return Object.assign({}, state, {
        isFetching: false
      })
    case RECEIVE_UPDATE_<%= nameUppercase %>:
      return Object.assign({}, state, {
        isUpdating: false
      })
    case RECEIVE_DELETE_<%= nameUppercase %>:
      return Object.assign({}, state, {
        isDeleting: false
      })
    default:
      return state
  }
}
