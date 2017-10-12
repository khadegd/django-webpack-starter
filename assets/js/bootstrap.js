window._ = require('lodash');

try {
    window.$ = window.jQuery = require('jquery');

    require('popper.js');
    require('bootstrap');
} catch (e) {}
