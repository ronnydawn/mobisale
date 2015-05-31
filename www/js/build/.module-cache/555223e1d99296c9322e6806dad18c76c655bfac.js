'use strict';

var New = React.createClass({displayName: "New",
	render: function() {
		return (
      React.createElement("div", {className: "navbar"}, 
        React.createElement("div", {className: "navbar-inner"}, 
          React.createElement("div", {className: "container"}, 
            "..."
          )
        )
      )
		);
	}
});

React.render(
	React.createElement(New, null), document.getElementById('example')
	);