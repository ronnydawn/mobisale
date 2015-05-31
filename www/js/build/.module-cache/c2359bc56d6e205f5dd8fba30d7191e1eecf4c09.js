'use strict';

var New = React.createClass({displayName: "New",
	render: function() {
		return (
			React.createElement("div", {className: "viewport"}, 
		   		React.createElement("div", {className: "frame"}, 
		   			React.createElement("div", {className: "menu nav-collapse collapse width"}), 
		   			React.createElement("div", {className: "view"}, "sapi")
		   		)
			)
		);
	}
});

React.render(
	React.createElement(New, null), document.getElementById('example')
	);