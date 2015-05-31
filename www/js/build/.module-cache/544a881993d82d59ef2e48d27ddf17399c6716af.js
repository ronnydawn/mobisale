'use strict';

var Test = React.createClass({displayName: "Test",
	render: function() {
		return (
			React.createElement("div", null, 
			React.createElement("nav", {className: "navbar navbar-default"}, 
			  React.createElement("div", {className: "container-fluid"}, 
			    React.createElement("div", {className: "navbar-header"}, 
			    	React.createElement("div", {className: "container"}, 
			    		React.createElement("div", {className: "navbar-left"}, 
			    		React.createElement("a", {className: "navbar-brand", href: "#"}, 
			      			React.createElement("p", {className: "glyphicon glyphicon-menu-hamburger"})
			      		)
			      		), 
			      		React.createElement("div", {className: "navbar-center"}, 
			      		"teset"
			      		), 
			      		React.createElement("div", {className: "navbar-right"}, 
			      		React.createElement("a", {className: "navbar-brand", href: "#"}, 
			      			React.createElement("p", {className: "glyphicon glyphicon-menu-hamburger"})
			      		)
			      		)
			    	)
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