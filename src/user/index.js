/*
	if 'ru.js' not found, NodeJS will automatically 
	found ru.json/ru.node/'ru' directory
*/ 
var db  = require('db'); 
var log = require('logger')(module);

function User(name){
    this.name = name
}

User.prototype.hello = function (who) {
    log(db.getPhrase("Hello") +' '+ who.name)
};

log("Module \"User\" was activated.");

/*	
	Public API of module 
	allows to use function without intermediate code 
	var c = require('user'); 
*/
module.exports  = User; 

//exports.User    = User;
//this.User       = User;    
// this = exports, but there is a problem with functions

// Public Global object of module
global.Lang = "EN";

// Information about current module
// console.log(module);