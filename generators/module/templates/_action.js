'use strict';

import { genericFetch } from 'helpers/Request'
import config from '../config'

export const REQUEST_CREATE_<%= nameUppercase %> = 'REQUEST_CREATE_<%= nameUppercase %>'
export const RECEIVE_CREATE_<%= nameUppercase %> = 'RECEIVE_CREATE_<%= nameUppercase %>'
export const REQUEST_GET_<%= nameUppercase %>S = 'REQUEST_GET_<%= nameUppercase %>S'
export const RECEIVE_GET_<%= nameUppercase %>S = 'RECEIVE_GET_<%= nameUppercase %>S'
export const REQUEST_GET_<%= nameUppercase %> = 'REQUEST_GET_<%= nameUppercase %>'
export const RECEIVE_GET_<%= nameUppercase %> = 'RECEIVE_GET_<%= nameUppercase %>'
export const REQUEST_UPDATE_<%= nameUppercase %> = 'REQUEST_UPDATE_<%= nameUppercase %>'
export const RECEIVE_UPDATE_<%= nameUppercase %> = 'RECEIVE_UPDATE_<%= nameUppercase %>'
export const REQUEST_DELETE_<%= nameUppercase %> = 'REQUEST_DELETE_<%= nameUppercase %>'
export const RECEIVE_DELETE_<%= nameUppercase %> = 'RECEIVE_DELETE_<%= nameUppercase %>'

function requestCreate<%= nameCapitalize %>() {
  return {
    type: REQUEST_CREATE_<%= nameUppercase %>
  }
}

function receiveCreate<%= nameCapitalize %>(json) {
  return {
    type: RECEIVE_CREATE_<%= nameUppercase %>,
    json
  }
}

export function create<%= nameCapitalize %>(payload) {
  return dispatch => {
    dispatch(requestCreate<%= nameCapitalize %>())
    const url = `${config.BASE_URL}`
    const options = {
      headers: {
        'Authorization': '',
        'Origin': config.ORIGIN
      },
      method: 'POST',
      body: payload
    }

    return genericFetch(url, options)
        .then(json => dispatch(receiveCreate<%= nameCapitalize %>(json)))
  }
}

function requestGet<%= nameCapitalize %>s() {
  return {
    type: REQUEST_GET_<%= nameUppercase %>S
  }
}

function receiveGet<%= nameCapitalize %>s(json) {
  return {
    type: RECEIVE_GET_<%= nameUppercase %>S,
    json
  }
}

export function get<%= nameCapitalize %>s(<%= name %>Id) {
  return dispatch => {
    dispatch(requestGet<%= nameCapitalize %>s())
    const url = `${config.BASE_URL}`
    const options = {
      headers: {
        'Authorization': '',
        'Origin': config.ORIGIN
      },
      method: 'GET'
    }

    return genericFetch(url, options)
        .then(json => dispatch(receiveGet<%= nameCapitalize %>s(json)))
  }
}

function requestGet<%= nameCapitalize %>() {
  return {
    type: REQUEST_GET_<%= nameUppercase %>
  }
}

function receiveGet<%= nameCapitalize %>(json) {
  return {
    type: RECEIVE_GET_<%= nameUppercase %>,
    json
  }
}

export function get<%= nameCapitalize %>(<%= name %>Id) {
  return dispatch => {
    dispatch(requestGet<%= nameCapitalize %>())
    const url = `${config.BASE_URL}`
    const options = {
      headers: {
        'Authorization': '',
        'Origin': config.ORIGIN
      },
      method: 'GET'
    }

    return genericFetch(url, options)
        .then(json => dispatch(receiveGet<%= nameCapitalize %>(json)))
  }
}

function requestUpdate<%= nameCapitalize %>() {
  return {
    type: REQUEST_UPDATE_<%= nameUppercase %>
  }
}

function receiveUpdate<%= nameCapitalize %>(json) {
  return {
    type: REQUEST_UPDATE_<%= nameUppercase %>,
    json
  }
}

export function update<%= nameCapitalize %>(<%= name %>Id, payload) {
  return dispatch => {
    dispatch(requestUpdate<%= nameCapitalize %>())
    const url = `${config.BASE_URL}`
    const options = {
      headers: {
        'Authorization': '',
        'Origin': config.ORIGIN
      },
      method: 'PUT',
      body: payload
    }

    return genericFetch(url, options)
        .then(json => dispatch(receiveUpdate<%= nameCapitalize %>(json)))
  }
}

function requestDelete<%= nameCapitalize %>() {
  return {
    type: REQUEST_DELETE_<%= nameUppercase %>
  }
}

function receiveDelete<%= nameCapitalize %>(json) {
  return {
    type: REQUEST_DELETE_<%= nameUppercase %>,
    json
  }
}

export function delete<%= nameCapitalize %>(<%= name %>Id) {
  return dispatch => {
    dispatch(requestDelete<%= nameCapitalize %>())
    const url = `${config.BASE_URL}`
    const options = {
      headers: {
        'Authorization': '',
        'Origin': config.ORIGIN
      },
      method: 'DELETE'
    }

    return genericFetch(url, options)
        .then(json => dispatch(receiveDelete<%= nameCapitalize %>(json)))
  }
}
