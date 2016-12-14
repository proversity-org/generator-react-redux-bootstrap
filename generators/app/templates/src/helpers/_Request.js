
'use strict';

import fetch from 'isomorphic-fetch'
import config from '../config'

export function genericFetch(url, options) {
  return fetch(url, options).then(response => response.json())
}

export function fetchUrl(url, method, needsAuth, payload) {
  return fetch(url, {
    headers: needsAuth ? getHeaders() : null,
    method: method,
    include: 'credentials',
    body: payload ? payload : null
  }).then(response => response.json())
}
