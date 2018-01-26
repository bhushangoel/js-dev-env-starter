//register babel to transpile before our tests run
require('babel-register')();

//telling mocha to ignore the feature that it doesnot understands
require.extensions['.css'] = function(){};