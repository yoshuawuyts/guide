/**
 * Module dependencies
 */

var router = require('page');
var react = require('react');

/**
 * Component
 */

module.exports = react.createClass({
  displayName: 'sidebar',

  render: function() {
    return react.DOM.aside({className: 'sidebar'},
      react.DOM.nav(null,

        react.DOM.ul(null,
          react.DOM.li({className: 'sidebar-title'}, 
            react.DOM.a({href: '/', onClick: handleClick.bind(null, '/')}, 'Guide')
          )
        ),
        react.DOM.ul(null,
          react.DOM.li({className: 'sidebar-headline'},
            react.DOM.a({href: '/ux', onClick: handleClick.bind(null, '/ux')}, 'UX')
          ),
          react.DOM.section(null,
            react.DOM.li(null,
              react.DOM.a({href: '/link'}, 'Animations')
            ),
            react.DOM.li(null,
              react.DOM.a({href: '/link'}, 'Buttons')
            ),
            react.DOM.li(null,
              react.DOM.a({href: '/link'}, 'Forms')
            ),
            react.DOM.li(null,
              react.DOM.a({href: '/link'}, 'Images')
            ),
            react.DOM.li(null,
              react.DOM.a({href: '/link'}, 'Navigation')
            ),
            react.DOM.li(null,
              react.DOM.a({href: '/link'}, 'Progress')
            ),
            react.DOM.li(null,
              react.DOM.a({href: '/link'}, 'Tables')
            ),
            react.DOM.li(null,
              react.DOM.a({href: '/link'}, 'Typography')
            )
          )
        ),
        react.DOM.ul(null,
          react.DOM.li({className: 'sidebar-headline'},
            react.DOM.a({href: '/visual', onClick: handleClick.bind(null, '/visual')}, 'Visual')
          ),
          react.DOM.section(null,
            react.DOM.li(null,
              react.DOM.a({href: '/link'}, 'link1')
            ),
            react.DOM.li(null,
              react.DOM.a({href: '/link'}, 'link2')
            )
          )
        ),
        react.DOM.ul(null,
          react.DOM.li({className: 'sidebar-headline'},
            react.DOM.a({href: '/code', onClick: handleClick.bind(null, '/code')}, 'Code')
          ),
          react.DOM.section(null,
            react.DOM.li(null,
              react.DOM.a({href: '/link'}, 'link1')
            ),
            react.DOM.li(null,
              react.DOM.a({href: '/link'}, 'link2')
            )
          )
        )
      )
    )
  }
});

/**
 * Handle click
 *
 * @param {String} url
 * @api private
 */

function handleClick(url, event) {
  event.preventDefault();
  router(url);
};