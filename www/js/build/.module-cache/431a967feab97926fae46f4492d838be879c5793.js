'use strict';

var New = React.createClass({displayName: "New",
  render: function() {
    return (
React.createElement("div", {"data-role": "header", style: "overflow:hidden;"}, 
React.createElement("h1", null, "I'm a header"), 
    React.createElement("a", {href: "#", "data-icon": "gear", className: "ui-btn-right"}, "Options"), 
    React.createElement("div", {"data-role": "navbar"}, 
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
  React.createElement(New, null), document.getElementById('example')
);