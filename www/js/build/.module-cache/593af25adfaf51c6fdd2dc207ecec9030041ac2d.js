'use strict';

var Header = React.createClass({displayName: "Header",
    render: function() {
        return (
    React.createElement("header", {role: "banner", className: "navbar navbar-fixed-top navbar-inverse"}, 
      React.createElement("div", {className: "container"}, 
        React.createElement("div", {className: "navbar-header"}, 
          React.createElement("button", {"data-toggle": "collapse-side", "data-target": ".side-collapse", "data-target-2": ".side-collapse-container", type: "button", className: "navbar-toggle pull-left"}, React.createElement("span", {className: "icon-bar"}), React.createElement("span", {className: "icon-bar"}), React.createElement("span", {className: "icon-bar"}))
        ), 
        React.createElement("div", {className: "navbar-inverse side-collapse in"}, 
          React.createElement("nav", {role: "navigation", className: "navbar-collapse"}, 
            React.createElement("ul", {className: "nav navbar-nav"}, 
              React.createElement("li", null, React.createElement("a", {href: "#Home"}, "Home")), 
              React.createElement("li", null, React.createElement("a", {href: "#users"}, "Users")), 
              React.createElement("li", null, React.createElement("a", {href: "http://placesforlove.com"}, "Places"))
            )
          )
        )
      )
    )
    
            );
    }
});

React.render(
    React.createElement(Header, null), document.getElementById('example')
  );