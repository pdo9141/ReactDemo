"user strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

// Hash location, more browser support
Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById('app'));
});

// History location, less browser support
//Router.run(routes, Router.HistoryLocation, function (Handler) {
//    React.render(<Handler />, document.getElementById('app'));
//});
