'use strict';

var New = React.createClass({displayName: "New",
	render: function() {
		return (
      React.createElement("div", null, 
      React.createElement("div", {className: "navbar"}, 
        React.createElement("div", {className: "navbar-inner"}, 
          React.createElement("a", {className: "brand", href: "#"}, "Title"), 
          React.createElement("ul", {className: "nav"}, 
            React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "Home")), 
            React.createElement("li", null, React.createElement("a", {href: "#"}, "Link")), 
            React.createElement("li", null, React.createElement("a", {href: "#"}, "Link"))
          )
        )
      )
      )
		);
	}
});

React.render(
	React.createElement(New, null), document.getElementById('example')
	);