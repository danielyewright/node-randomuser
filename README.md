# node-randomuser

[![NPM](https://nodei.co/npm/node-randomuser.png?mini=true)](https://nodei.co/npm/node-randomuser/)

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

## Requirements

You can install `node-randomuser` and its dependencies with npm: 

```shell  
$ npm install randomuser
```

Dependencies

* [Node.js](http://nodejs.org/)
* [Request](https://github.com/mikeal/request)
* [qs](https://github.com/visionmedia/node-querystring)

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