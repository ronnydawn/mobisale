'use strict';

var New = React.createClass({displayName: "New",
  render: function() {
    return (
        React.createElement("div", {id: "wrapper"}, 
                React.createElement("div", {id: "sidebar-wrapper"}, 
                    React.createElement("ul", {className: "sidebar-nav"}, 
                        React.createElement("li", {className: "sidebar-brand"}, 
                            React.createElement("a", {href: "#"}, 
                                "Start Bootstrap"
                            )
                        ), 
                        React.createElement("li", null, 
                            React.createElement("a", {href: "#"}, "Dashboard")
                        ), 
                        React.createElement("li", null, 
                            React.createElement("a", {href: "#"}, "Shortcuts")
                        ), 
                        React.createElement("li", null, 
                            React.createElement("a", {href: "#"}, "Overview")
                        ), 
                        React.createElement("li", null, 
                            React.createElement("a", {href: "#"}, "Events")
                        ), 
                        React.createElement("li", null, 
                            React.createElement("a", {href: "#"}, "About")
                        ), 
                        React.createElement("li", null, 
                            React.createElement("a", {href: "#"}, "Services")
                        ), 
                        React.createElement("li", null, 
                            React.createElement("a", {href: "#"}, "Contact")
                        )
                    )
                ), 
                React.createElement("nav", {className: "navbar navbar-inverse", role: "navigation"}, 
                    React.createElement("div", {className: "row"}, 
                      React.createElement("div", {className: "col-xs-6 col-md-4"}, React.createElement("a", {href: "#menu-toggle", className: "btn btn-default", id: "menu-toggle"}, "Toggle Menu")), 
                      React.createElement("div", {className: "col-xs-6 col-md-4"}, ".col-xs-6 .col-md-4"), 
                      React.createElement("div", {className: "col-xs-6 col-md-4"}, ".col-xs-6 .col-md-4")
                    )
                ), 
                React.createElement("div", {id: "page-content-wrapper"}, 
                    React.createElement("div", {className: "container-fluid"}, 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "col-lg-12"}, 
                                React.createElement("h1", null, "Simple Sidebar"), 
                                React.createElement("p", null, "This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas."), 
                                React.createElement("p", null, "Make sure to keep all page content within the ", React.createElement("code", null, "#page-content-wrapper"), ".")
                                
                            )
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