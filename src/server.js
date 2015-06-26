var PublicModuleAPI = require('./user.js');

var vasya = new PublicModuleAPI.User("Vasia");
var petia = new PublicModuleAPI.User("Petia");

vasya.hello(petia);

// Access to global variable from User module
console.log(Lang);