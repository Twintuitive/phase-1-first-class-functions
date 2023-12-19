// Function that receives a callback function and calls it
function receivesAFunction(callback) {
    callback();
}

// Function that returns a named function
function returnsANamedFunction() {
    return function namedFunction() {
        // This is a named function.
    };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        // This is an anonymous function.
    };
}