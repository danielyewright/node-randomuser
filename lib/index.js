'use strict';

/*!
 *  randomuser.me API Node.js Utility
 *  Author: Daniely Wright @DanielyWright
 *  MIT Licensed
 */
var request = require('request')
var qs = require('qs')

/**
 * Class for handling communications with RandomUser's API.
 */
function RandomUser() {
  if (!(this instanceof RandomUser)) {
    return new RandomUser()
  }

  this.options = {
    baseURL: 'https://randomuser.me/api/'
  }
}

/**
 * Retrieves randomly generated users from the API with optional parameters. By default, only specific fields
 * are retrieved from the API.
 * 
 * i.e name, email, location, phone number, id
 *
 * @param {Object}    params    Optional parameters for user generation API request
 * @param {Function}    callback    Callback function that will be called when the processing is done.
 */
RandomUser.prototype.getUsers = function (params, callback) {
	var url = this.options.baseURL + '?'

  if (typeof params === 'function') {
    callback = params
    params = null
  } 
  if (typeof callback !== 'function') {
    throw new Error('ERROR: Invalid callback function.')
  }
  else if (typeof params === 'object') {
	  url += qs.stringify(params)
	}

  request.get(url, function (error, response, body) {
    if (!error && response.statusCode == 200) { 
    	var users = []
    	
    	for (var i = 0; i < JSON.parse(body).results.length; i++) {      	
      	var response = JSON.parse(body).results[i]
      	 
      	users.push({
          first_name: response.user.name.first
          , last_name: response.user.name.last
          , address: response.user.location
          , email_address: response.user.email
          , phone_number: response.user.phone
          , id: response.user.registered
        })
    	}
    	
    	var results = []
    	
    	results.push({
        results: users
        , total: users.length
      })
      
      callback(JSON.stringify(results, null, 2))
    }
    if (error) {
      throw new Error(e)
    }
  })

  return this
}

module.exports = RandomUser