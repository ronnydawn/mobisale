'use strict';

var New = React.createClass({displayName: "New",
	render: function() {
		return (
  React.createElement("nav", null, 
    React.createElement("div", {class: "nav-wrapper"}, 
      React.createElement("a", {href: "#!", class: "brand-logo"}, "Logo"), 
      React.createElement("ul", {class: "right hide-on-med-and-down"}, 
        React.createElement("li", null, React.createElement("a", {href: "sass.html"}, React.createElement("i", {class: "mdi-action-search"}))), 
        React.createElement("li", null, React.createElement("a", {href: "components.html"}, React.createElement("i", {class: "mdi-action-view-module"}))), 
        React.createElement("li", null, React.createElement("a", {href: "javascript.html"}, React.createElement("i", {class: "mdi-navigation-refresh"}))), 
        React.createElement("li", null, React.createElement("a", {href: "mobile.html"}, React.createElement("i", {class: "mdi-navigation-more-vert"})))
      )
    )
  )
		);
	}
});

React.render(
	React.createElement(New, null), document.getElementById('example')
	);