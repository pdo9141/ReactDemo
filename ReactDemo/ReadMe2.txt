00) Tip: in DOS, type "type package.json" to view contents of files
01) github.com/coryhouse/react-flux-starter-kit (Node, Browserify, Gulp, Bootstrap, ESLint)
	React 0.13.3, React-Router 0.13.3, Flux 2.0.3
02) Install Node: nodejs.org (node -v)
	Create directory C:\Users\Phillip\Source\Repos\ReactDemo\ReactDemo\psadmin
	CD into that directory and type npm init (leave all defaults, update author to your name), this creates package.json file
03) Install gulp
	npm install --save gulp@3.9.0 gulp-connect@2.2.0 gulp-open@1.0.0 (do this in psadmin directory)
	npm install -g gulp (if first time installing gulp)
04) Install Browserify
	npm install --save browserify@11.0.1 reactify@1.1.1 vinyl-source-stream@1.1.0
05) Install Bootstrap and JQuery
	npm install --save bootstrap@3.3.5 jquery@2.1.4 gulp-concat@2.6.0
06) Install ESLint
	npm install --save gulp-eslint@0.15.0
	Go to github.com/coryhouse/react-flux-starter-kit/blob/master/eslint.config.json
	Delete the global.eslintrc file in C:\Users\User if you gulp won't startup with lint
07) Install React libraries
	npm install --save react@0.13.3 react-router@0.13.3 flux@2.0.3
08) For better performance, leverage shouldComponentUpdate if you know you don't want the DOM to update.
	Look into PureRenderMixin + immutability
09) If you have global variables ($ = jQuery = require('jquery')), use IIFE and "use strict" inside it to avoid lint errors
10) Props: look like HTML attributes, but immutable (this.props.username)
	Pass data to child components
	You can define getDefaultProps
11) State: Holds mutable state (this.state.username)
	Data in controller view
	You can define getInitialState
	When you manipulate the state, you need to use the setter, this.setState({})
12) Lifecycle Methods
	componentWillMount: when = before initial render, both client and server, why = good spot to set initial state
	componentDidMount: when = after render, why = access DOM, integrate with frameworks, set timers, AJAX requests
	componentWillReceiveProps: when = when receiving new props. Not called on initial render, why = set state before a render
	shouldComponentUpdate: when = before render when new props or state are being received. Not called on initial render, why = performance. return false to void unnecessary re-renders 
	componentWillUpdate: when = immediately before rendering when new props or state are being received. not called on initial render, why = prepare for an update 
	componentDidUpdate: when = after component's updates are flushed to the DOM. not called for the initial render, why = work with the DOM after an update
	componentWillUnmount: when = immediately before component is removed from the DOM, why = cleanup
13) When creating multiple child components dynamically, you need to provide a key for each child component
	<tr key={author.id}>
14) Paste in authorApi.js from http://bit.ly/authorapi
	Paste in authorData.js from http://bit.ly/authorapidata
15) Install lodash
	npm install --save lodash
16) Controller Views = top level component, sets props on children, interacts with stores
	Smart components that pass data down via props
17) Prop Validation (isn't run in the production (minified) version of React)
	propTypes: {
		author: React.PropTypes.object.isRequired,
		onSave: React.PropTypes.func.isRequired,
		validate: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object,
		hasErrors: React.PropTypes.func.isRequired
	}

	optionalArray: React.PropTypes.array,
	optionalBool: React.PropTypes.bool,
	optionalFunc: React.PropTypes.func,
	optionalNumber: React.PropTypes.number,
	optionalObject: React.PropTypes.object,
	optionalString: React.PropTypes.string
18) Mixins: for cross-cutting concerns, share code between multiple components, share behavior among multiple components
	var ManageAuthorPage = React.createClass({
		mixins: [
			Router.Navigation,
			Router.State,
		],
		...
19) React Router
	Nested views map to nested routes, declarative, used at Facebook, inspired by Ember
	Route: declaratively map a route
	DefaultRoute: for URL of "/". Like "index.html".
	NotFoundRoute: client side 404
	Redirect: redirect to another route
14) Hash vs History URLs
	Hash location: yourUrl.com#/courses
		Ugly URLs
		Works in all browsers
		Not compatible with server-render
	History location: yourUrl.com/courses
		Clean URLs
		IE10+
		Works with server-render
15) Handling Transitiions
	willTransitionTo: determine if page should be transitioned to
	willTransitionFrom: runs checks before user navigates away
16) Install toastr
	npm install --save toastr@2.1.0