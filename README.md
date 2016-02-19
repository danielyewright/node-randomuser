# node-randomuser

> A randomuser.me API Node.js Utility

[![Build Status](https://travis-ci.org/danielyewright/node-randomuser.svg?branch=master)](https://travis-ci.org/danielyewright/node-randomuser)

## Installation

Install using the node.js package manager [npm](http://npmjs.org/):

```shell
$ npm install node-randomuser
```
    
Or install via git clone:

```shell
$ git clone https://github.com/danielyewright/node-randomuser.git
$ cd node-randomuser
$ npm install
```

## Usage

### Require Module and Initialize Client

```javascript
var RandomUser = require('node-randomuser');
var randomUser = new RandomUser();
```

### .getUsers(callback)

```javascript
randomUser.getUsers(function(data) {
  console.log(data);
});
```

### .getUsers(params, callback)

```javascript
randomUser.getUsers({nat: 'us', results: 5}, function(data) {
  console.log(data);
});
```

### Parameters (params)

* `results` - specifies the number of results to return
* `nat` - specifies the nationality to use

Read randomuser's [API Documentation](https://randomuser.me/documentation) for more customization.

## Testing

To run the mocha.js test cases:

```shell
$ npm test
```

## Contributing

Feel free to contribute!