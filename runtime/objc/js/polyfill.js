const g = global;

// Setup the JavaScriptCore runtime to look like what Manticore requires (bind native functions)
g.manticore.log('info', 'Loading objc polyfill');

require('core-js/es6/symbol');
require('core-js/es6/set');
require('core-js/fn/string/includes');
require('core-js/fn/object/is');
require('core-js/fn/object/assign');
require('core-js/fn/array/of');
require('core-js/fn/array/from');
require('core-js/fn/array/find');
require('core-js/fn/array/find-index');
require('core-js/fn/symbol/iterator');

require('../../common/console');
require('../../common/promise');
require('../../common/timer');
require('../../common/fetch');

g.manticore.log('info', 'Loaded objc polyfill');