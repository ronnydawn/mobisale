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
                React.createElement("nav", {className: "navbar navbar-inverse navbar-static-top navbar-collapse", role: "navigation"}, 
                React.createElement("div", {className: "container-fluid"}, 

                    React.createElement("div", {className: "navbar-header"}, 
                      React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1"}, 
                        React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
                        React.createElement("span", {className: "icon-bar"}), 
                        React.createElement("span", {className: "icon-bar"}), 
                        React.createElement("span", {className: "icon-bar"})
                      ), 
                      React.createElement("button", {type: "button", id: "menu-toggle", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#menu-toggle"}
                      )

                    ), 


                    React.createElement("div", {className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1"}, 
                      React.createElement("ul", {className: "nav navbar-nav"}, 
                        React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "Link ", React.createElement("span", {class: "sr-only"}, "(current)"))), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Link")), 
                        React.createElement("li", {className: "dropdown"}, 
                          React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-expanded": "false"}, "Dropdown ", React.createElement("span", {class: "caret"})), 
                          React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
                            React.createElement("li", {className: "divider"}), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link")), 
                            React.createElement("li", {className: "divider"}), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "One more separated link"))
                          )
                        )
                      ), 
                      React.createElement("form", {className: "navbar-form navbar-left", role: "search"}, 
                        React.createElement("div", {className: "form-group"}, 
                          React.createElement("input", {type: "text", className: "form-control", placeholder: "Search"})
                        ), 
                        React.createElement("button", {type: "submit", className: "btn btn-default"}, "Submit")
                      ), 
                      React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Link")), 
                        React.createElement("li", {className: "dropdown"}, 
                          React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-expanded": "false"}, "Dropdown ", React.createElement("span", {class: "caret"})), 
                          React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
                            React.createElement("li", {className: "divider"}), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link"))
                          )
                        )
                      )
                    )
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