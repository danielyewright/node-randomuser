/** 
 * Tests for RandomUser Node client
 * Test Framework: Mocha (http://visionmedia.github.io/mocha/)
 * Assertions: Should (https://github.com/visionmedia/should.js/) 
 */
var RandomUser = require('../lib/index.js')
  , should = require('should')
  , randomUser

beforeEach(function(){
  randomUser = new RandomUser()
})

describe('randomUser.getUsers()', function() {
  this.timeout(15000)
  
  it('should throw error if callback is not typeof function', function () {
    (function() {
      randomUser.getUsers(null, null, 'string');
    }).should.throwError('ERROR: Invalid callback function.')
  })

  it('should successfully complete a request without params', function (done) {
    randomUser.getUsers(function(response) {
      should.exist(response)
      done()
    })
  })

  it('should successfully complete a request with params', function (done) {
    randomUser.getUsers({nat: 'us', results: 5}, function(response) {
      should.exist(response)
      done()
    })
  })
})