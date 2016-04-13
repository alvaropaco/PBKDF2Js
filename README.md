# PBKDF2Js
This project is a lite implementation of PBKDF2 hash crypt algorithm.

# Usage Cases

Below you can fin some cases to use this library.

  - Encrypt a plain password.
  - Decrypt a hash password from AspNet data storage.
  - Check a plain password with a hash.

### Version
1.0.0

### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [Marked] - a super fast port of Markdown to JavaScript
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [keymaster.js] - awesome keyboard handler lib by [@thomasfuchs]
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

You need the Crypto.js extension installed:

```sh
$ npm i -g pbkdf2-js
```

#### Creating a Hash from a plain String

```js
var crypt = require("./lib/pbkdf2.min");

var passPlain = "testMyPass";

var hashed = crypt.hashPassword(passPlain, function (nullable, hashed) {
    console.log(hashed);
});
```

#### Checking validate of a plain pass with a hashed

```js
var crypt = require("./lib/pbkdf2.min");

var isValid = crypt.verifyPassword(passPlain, hashed, function (nullable, result) {
    console.log("Is same? " + result);
});
```


