'use strict';

var Test = React.createclassName({
	render: function() {
		return (
			React.createElement("div", null)
		);
	}
});

React.render(
	React.createElement(Test, null), document.getElementById('example')
);