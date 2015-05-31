'use strict';

var Test = React.createClass({displayName: "Test",
	render: function() {
		return (
			React.createElement("div", null, 
			React.createElement("nav", {className: "navbar navbar-default"}, 
			  React.createElement("div", {className: "container-fluid"}, 
			    React.createElement("div", {className: "navbar-header"}, 
			      React.createElement("a", {className: "navbar-brand", href: "#"}, 
			        React.createElement("img", {alt: "Brand", src: "..."})
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