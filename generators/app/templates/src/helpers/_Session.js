
'use strict';

import config from '../config'

export function getUsername(){
  return getSession()['username'];
}

export function setUsername(username) {
  return setSession(Object.assign(getSession(), { username: username }))
}

export function isAuthenticated(){
  return !!getSession()['isAuthenticated'];
}

export function getSession(){
  return JSON.parse(localStorage.getItem(config.SESSION_KEY) || '{}')
}

export function setSession(params){
  return localStorage.setItem(config.SESSION_KEY, JSON.stringify(params))
}

export function endSession(){
  return localStorage.removeItem(config.SESSION_KEY)
}
