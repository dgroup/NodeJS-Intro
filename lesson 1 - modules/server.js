var db   = require('db');				// add module/js file
var User = require('./user');			// add module/js file
var log  = require('logger')(module); 	// send reference to current module as argument for logger.js

db.connect();

/**
 * Public API of Module. Such approach allows
 * to use this module as module or as standalone app.
 **/
function run(){
    var vasya = new User("Tom");
    var petia = new User("Hank");

    vasya.hello(petia);

    // Access to global variable from User module
    log(Lang);
    log(db.getPhrase("Run successful"));
}

if (module.parent) {    // something require('server.js')
    exports.run = run;
} else {                // something just call this .js ( >node server.js )
    run();
}