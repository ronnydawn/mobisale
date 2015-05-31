'use strict';

var Header = React.createClass({displayName: "Header",
    render: function() {
        return (
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
                        React.createElement("a", {href: "#"}, 
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

            React.createElement("div", {id: "page-content-wrapper"}, 
                React.createElement("button", {type: "button", className: "hamburger is-closed", "data-toggle": "offcanvas"}, 
                    React.createElement("span", {className: "hamb-top"}), 
                    React.createElement("span", {className: "hamb-middle"}), 
                    React.createElement("span", {className: "hamb-bottom"})
                )
            ), 

            React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-lg-8 col-lg-offset-2"}, 
                            React.createElement("h1", null, "Fancy Toggle Sidebar Navigation")
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