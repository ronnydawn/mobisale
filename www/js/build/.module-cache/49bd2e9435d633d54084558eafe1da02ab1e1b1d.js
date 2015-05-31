'use strict';

var New = React.createClass({displayName: "New",
	render: function() {
		return (
  React.createElement("nav", null, 
    React.createElement("div", {className: "nav-wrapper"}, 
      React.createElement("a", {href: "#!", className: "brand-logo"}, "Logo"), 
      React.createElement("a", {href: "#", "data-activates": "mobile-demo", className: "button-collapse"}, React.createElement("i", {className: "mdi-navigation-menu"})), 
      React.createElement("ul", {class: "right hide-on-med-and-down"}, 
        React.createElement("li", null, React.createElement("a", {href: "sass.html"}, "Sass")), 
        React.createElement("li", null, React.createElement("a", {href: "components.html"}, "Components")), 
        React.createElement("li", null, React.createElement("a", {href: "javascript.html"}, "Javascript")), 
        React.createElement("li", null, React.createElement("a", {href: "mobile.html"}, "Mobile"))
      ), 
      React.createElement("ul", {className: "side-nav", idName: "mobile-demo"}, 
        React.createElement("li", null, React.createElement("a", {href: "sass.html"}, "Sass")), 
        React.createElement("li", null, React.createElement("a", {href: "components.html"}, "Components")), 
        React.createElement("li", null, React.createElement("a", {href: "javascript.html"}, "Javascript")), 
        React.createElement("li", null, React.createElement("a", {href: "mobile.html"}, "Mobile"))
      )
    )
  )
		);
	}
});

React.render(
	React.createElement(New, null), document.getElementById('example')
	);