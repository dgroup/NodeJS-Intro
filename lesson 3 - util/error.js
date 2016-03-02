var util = require("util");

// message name stack
function PhraseError(msg){
    this.message = msg;
    /*
        Collect current info about stack and save into this
        , disable constructor from stacktrace
    */
    Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HttpError(status, msg){
    this.status     = status;
    this.message    = msg;
    Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

var phrases = {
    "Hello" : "Привет",
    "world" : "мир"
};

function getPhrase(phrase) {
    if (!phrases[phrase])
        throw new PhraseError("There is no such phrase: " + phrase);

    return phrases[phrase];
}

function makePage(url) {
    if (url != 'index.html')
        throw new HttpError(404, "There is no such page")
    return util.format("%s %s", getPhrase("Hell"), getPhrase("world"));
}

try {
    var page = makePage("index.html");
    console.log ( page );
} catch (e) {
    if (e instanceof HttpError)
        console.log(e.status, e.message);
    else
        console.error("Error %s\n message: %s\n stack: %s\n", e.name, e.message, e.stack);

}
