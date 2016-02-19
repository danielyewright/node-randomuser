# node-randomuser

[![NPM](https://nodei.co/npm/node-randomuser.png?mini=true)](https://nodei.co/npm/node-randomuser/)

## Installation

Install using the node.js package manager [npm](http://npmjs.org/):

```shell
$ npm install node-randomuser
```
    
Or install via git clone:

```shell
$ git clone git://github.com/KevinTCoughlin/node-randomuser.git
$ cd node-randomuser
$ npm install
```

## Requirements

You can install randomuser and its dependencies with npm: 
  
    $ npm install randomuser

Dependencies

* [Node.js](http://nodejs.org/) >= v0.6
* [Request](https://github.com/mikeal/request) v2.x.x
* [qs](https://github.com/visionmedia/node-querystring) v0.6.x

## Examples

Demos of the randomuser module are located in: [./examples](https://github.com/KevinTCoughlin/node-randomuser/tree/master/examples)

## Usage

### Require Module and Initialize Client

```javascript
var RandomUser = require('..')
  , r = new RandomUser();
```

### .getUsers(callback)

```javascript
r.getUsers(function(data) {
  console.log(data);
});
```

### .getUsers(params, callback)

```javascript
r.getUsers({ seed: "foxie", results: 5, gender: "male" }, function(data) {
  console.log(data);
});
```

### params {Object} [Documentation](http://randomuser.me/)

* `results` - int specifying number of results to return
* `genders` - string - "male" or "female" specifying gender to generate
* `seed` - string - service will return same data for given seed

## Testing

Issue the following Make command in the top directory to run the mocha.js test cases:

    $ make test

Or...

    $ npm test

## Contributing

Feel free to contribute!