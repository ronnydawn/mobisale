'use strict';

var Test = React.createClass({displayName: "Test",
	render: function() {
		return (
			React.createElement("div", {"data-role": "header", style: {overflow:'hidden'}}, 
			React.createElement("h1", null, "Mobisale."), 
			React.createElement("a", {href: "#", "data-icon": "search", className: "ui-btn-right"}), 
				React.createElement("div", {"data-role": ""}, 
				React.createElement("ul", null, 
				React.createElement("li", null, React.createElement("a", {href: "#"}, "One")), 
				React.createElement("li", null, React.createElement("a", {href: "#"}, "Two")), 
				React.createElement("li", null, React.createElement("a", {href: "#"}, "Three"))
				)
				)
			)
		);
	}
});

React.render(
	React.createElement(Test, null), document.getElementById('example')
);