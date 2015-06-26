var DB   = require('db');
var User = require('./user');

DB.connect();

/**
 * Public API of Module. Such approach allows
 * to use this module as module or as standalone app.
 **/
function run(){
    var vasya = new User("Вася");
    var petia = new User("Петя");

    vasya.hello(petia);

    // Access to global variable from User module
    console.log(Lang);
    console.log(DB.getPhrase("Run successful"));
}

if (module.parent) {    // something require('server.js')
    exports.run = run;
} else {                // something just call this .js ( >node server.js )
    run();
}