'use strict';

var New = React.createClass({displayName: "New",
  render: function() {
    return (
  React.createElement("nav", null, 
    React.createElement("div", {class: "nav-wrapper"}, 
      React.createElement("a", {href: "#", class: "brand-logo"}, "Logo"), 
      React.createElement("ul", {id: "nav-mobile", class: "right hide-on-med-and-down"}, 
        React.createElement("li", null, React.createElement("a", {href: "sass.html"}, "Sass")), 
        React.createElement("li", null, React.createElement("a", {href: "components.html"}, "Components")), 
        React.createElement("li", null, React.createElement("a", {href: "javascript.html"}, "JavaScript"))
      )
    )
  )
    );
  }
});

React.render(
  React.createElement(New, null), document.getElementById('example')
);