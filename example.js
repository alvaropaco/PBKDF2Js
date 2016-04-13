var crypt = require("./lib/pbkdf2.min");

var passPlain = "testMyPass";

var hashed = crypt.hashPassword(passPlain, function (nullable, results) {
    console.log(results);
    
    var isValid = crypt.verifyPassword(passPlain, results, function (nullable, result) {
        console.log("Is same? " + result);
    });

});



