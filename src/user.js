var phrases = require('./ru'); // if 'ru.js' not found, NodeJS will automatically found ru.json/ru.node/'ru' directory

function User(name){
    this.name = name
}

User.prototype.hello = function (who) {
    console.log(phrases.Hello +' '+ who.name)
};

console.log("Module \"User\" was enabled.");

// Public API of module
exports.User = User;

// Public Global object of module
global.Lang = phrases.Lang;


/**
    So, finally, each module has:
    - var       (local entities)
    - exports   (public entities)
    - global    (global entities), deprecated
    - type:
        1. JS           - current module
        2. Node(C++)
        3. JSON
 */