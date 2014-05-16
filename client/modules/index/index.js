/**
 * Module dependencies
 */

var router = require('page');
var react = require('react');
var home = require('../../views/home.js');

/**
 * Routes
 */

router('/', render(home()));
// router('/code', render(code()));
// router('/style', render(style()));
// router('/docs', render(docs()));

/**
 * Render a 'view'
 *
 * @params {ReactComponent} view
 * @api private
 */

function render(view) {
  react.renderComponent(view, document.getElementById('root'));
}