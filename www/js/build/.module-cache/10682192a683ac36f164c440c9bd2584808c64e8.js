'use strict';

var Test = React.createClass({displayName: "Test",
	render: function() {
		return (
			React.createElement("div", null, 
			React.createElement("nav", {className: "navbar navbar-default"}, 
			  React.createElement("div", {className: "container-fluid"}, 
			    React.createElement("div", {className: "navbar-header"}, 
			      React.createElement("p", {className: "navbar-text"}, "Signed in as Mark Otto")
			    )
			  )
			)
			)
		);
	}
});

React.render(
	React.createElement(Test, null), document.getElementById('example')
);