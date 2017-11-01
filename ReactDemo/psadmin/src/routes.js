"use strict";

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} />
        <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
        <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
        <NotFoundRoute handler={require('./components/notFoundPage')} />
        <Redirect from="about-us" to="about" />
        <Redirect from="about/*" to="about" />
        <Redirect from="awthors" to="authors" />
    </Route>
);

//var routes = (
//    <Route name="app" path="/" handler={require('./components/app')}>
//        <DefaultRoute handler={require('./components/homePage')} />
//        <Route name="authors" handler={require('./components/authors/authorPage')} />
//        <Route name="about" path="about-us" handler={require('./components/about/aboutPage')} />
//    </Route>
//)

// Given a route like this:
// <route path="/course/:courseId" handler={Course} />
// and a URL like this:
// '/course/clean-code?module=3'

//var Course = React.createClass({
//    render: function () {
//        this.props.params.courseId; // "clean-code"
//        this.props.query.module; // "3"
//        this.props.path; // "/course/clean-code/?module=3"
//    }
//});

module.exports = routes;