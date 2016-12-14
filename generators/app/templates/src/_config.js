
'use strict';

var config = {
  SESSION_KEY: '',
  BASE_URL: 'http://localhost:3001',
  ORIGIN: 'localhost:3000'
}

if(process.env.NODE_ENV == 'production'){
  config = Object.assign(config, {
    SESSION_KEY: '',
    BASE_URL: '',
    ORIGIN: ''
  })
}

module.exports = config