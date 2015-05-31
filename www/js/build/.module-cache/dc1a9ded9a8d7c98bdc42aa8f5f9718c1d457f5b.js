'use strict';

var Test = React.createClass({displayName: "Test",
	render: function() {
		return (
			React.createElement("div", null, 
			React.createElement("ul", {className: "nav nav-pills"}, 
			  React.createElement("li", {role: "presentation", className: "active"}, React.createElement("a", {href: "#"}, "Home")), 
			  React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#"}, "Profile")), 
			  React.createElement("li", {role: "presentation"}, React.createElement("a", {href: "#"}, "Messages"))
			)
			)
		);
	}
});

React.render(
	React.createElement(Test, null), document.getElementById('example')
);