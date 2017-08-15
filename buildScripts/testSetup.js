//Register Babel to transpile before tests run
require('babel-register')();

//disable webpack features that Mocha does not understand
require.extensions['.css'] = function() {};