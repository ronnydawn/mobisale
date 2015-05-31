'use strict';

var Header = React.createClass({displayName: "Header",
    render: function() {
        return (
React.createElement("nav", {className: "navbar navbar-default"}, 
  React.createElement("div", {className: "container-fluid"}, 

    React.createElement("div", {className: "navbar-header"}, 
      React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1"}, 
        React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
        React.createElement("span", {className: "icon-bar"}), 
        React.createElement("span", {className: "icon-bar"}), 
        React.createElement("span", {className: "icon-bar"})
      ), 
      React.createElement("a", {className: "navbar-brand", href: "#"}, "Brand")
    ), 


    React.createElement("div", {className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1"}, 
      React.createElement("ul", {className: "nav navbar-nav"}, 
        React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "Link ", React.createElement("span", {className: "sr-only"}, "(current)"))), 
        React.createElement("li", null, React.createElement("a", {href: "#"}, "Link"))
      ), 
      React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
        React.createElement("li", null, React.createElement("a", {href: "#"}, "Link"))
      )
    )

  )
)
        );
    }
});

var New = React.createClass({displayName: "New",
  render: function() {
    return (
        React.createElement("div", {id: "wrapper"}, 
            React.createElement("div", {className: "overlay"}), 

            React.createElement("nav", {className: "navbar navbar-inverse navbar-fixed-top", id: "sidebar-wrapper", role: "navigation"}, 
                React.createElement("ul", {className: "nav sidebar-nav"}, 
                    React.createElement("li", {className: "sidebar-brand"}, 
                        React.createElement("a", {href: "#", id: "brand-side"}, 
                            "Brand"
                        )
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "#"}, "Home")
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "#"}, "About")
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "#"}, "Events")
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "#"}, "Team")
                    ), 
                    React.createElement("li", {className: "dropdown"}, 
                        React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown"}, "Works ", React.createElement("span", {className: "caret"})), 
                        React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
                            React.createElement("li", {className: "dropdown-header"}, "Dropdown heading"), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link")), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "One more separated link"))
                        )
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "#"}, "Services")
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "#"}, "Contact")
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "https://twitter.com/maridlcrmn"}, "Follow me")
                    )
                )
            ), 

            React.createElement("div", {className: "navbar navbar-inverse navbar-static-top navbar-collapse wrapper", id: "top-wrapper"}, 
            React.createElement("ul", {className: "nav navbar-nav"}, 
            React.createElement("li", null, 
            React.createElement("button", {type: "button", className: "hamburger is-closed", "data-toggle": "offcanvas"}, 
                React.createElement("span", {className: "hamb-top"}), 
                React.createElement("span", {className: "hamb-middle"}), 
                React.createElement("span", {className: "hamb-bottom"})
            )
            )
            ), 
            React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
                React.createElement("li", null, React.createElement("a", {href: "#"}, "Link"))
            )
            ), 

            React.createElement("div", {id: "page-content-wrapper"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-lg-8 col-lg-offset-2"}, 
                            React.createElement("h1", null, "Fancy Toggle Sidebar Navigation")
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