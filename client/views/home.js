/**
 * Module dependencies
 */

var react = require('react');
var sidebar = require('../modules/sidebar/sidebar');

/**
 * Component
 */

module.exports = react.createClass({
  displayName: 'home',
  render: function() {
    return react.DOM.div({className: 'grid'}, 
      sidebar()
    )
  }
});

/*
      dangerouslySetInnerHTML: {
        __html: marked(content)
      }
*/      