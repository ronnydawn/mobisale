'use strict';

var Test = React.createClass({displayName: "Test",
	render: function() {
		return (
			React.createElement("div", null, 
			 "Test"
			)
		);
	}
});

React.render(
	React.createElement(Test, null), document.getElementById('example')
);