'use strict';

var PageSlider = require(['pageslider-react']);

var Header = React.createClass({displayName: "Header",
    render: function () {
        return (
            React.createElement("header", {className: "bar bar-nav"}, 
                React.createElement("a", {href: "#", className: "icon icon-left-nav pull-left" + (this.props.back==="true"?"":" hidden")}), 
                React.createElement("h1", {className: "title"}, this.props.text)
            )
        );
    }
});

var HomePage = React.createClass({displayName: "HomePage",
    render: function () {
        return (
            React.createElement("div", {className: "page " + this.props.position}, 
                React.createElement(Header, {text: "PageSlider"}), 
                React.createElement("div", {className: "content"}, 
                    React.createElement("ul", {className: "table-view"}, 
                        React.createElement("li", {className: "table-view-cell media"}, React.createElement("a", {href: "#page1"}, "Page 1")), 
                        React.createElement("li", {className: "table-view-cell media"}, React.createElement("a", {href: "#page2"}, "Page 2"))
                    )
                )
            )
        );
    }
});

var Page1 = React.createClass({displayName: "Page1",
    render: function () {
        return (
            React.createElement("div", {className: "page page1 " + this.props.position}, 
                React.createElement(Header, {text: "Page 1", back: "true"}), 
                React.createElement("div", {className: "content"}, 
                    React.createElement("div", {className: "card"}, 
                        React.createElement("ul", {className: "table-view"}, 
                            React.createElement("li", {className: "table-view-cell media"}, 
                                React.createElement("a", null, 
                                    React.createElement("img", {className: "media-object pull-left", src: "images/avatar.png"}), 
                                    React.createElement("div", {className: "media-body"}, "Susan Smith")
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});

var Page2 = React.createClass({displayName: "Page2",
    render: function () {
        return (
            React.createElement("div", {className: "page page2 " + this.props.position}, 
                React.createElement(Header, {text: "Page 2", back: "true"}), 
                React.createElement("div", {className: "content"}, 
                    React.createElement("img", {src: "images/react.png"})
                )
            )
        );
    }
});

var App = React.createClass({displayName: "App",
    mixins: [PageSlider],
    componentDidMount: function() {
        router.addRoute('', function() {
            this.slidePage(React.createElement(HomePage, {key: "home"}));
        }.bind(this));
        router.addRoute('page1', function() {
            this.slidePage(React.createElement(Page1, {key: "page1"}));
        }.bind(this));
        router.addRoute('page2', function() {
            this.slidePage(React.createElement(Page2, {key: "page2"}));
        }.bind(this));
        router.start();
    }
});

React.render(React.createElement(App, null),  document.getElementById('example'));