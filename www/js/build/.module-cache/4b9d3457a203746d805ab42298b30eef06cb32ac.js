'use strict';

// var App = React.createClass({
//     // mixins: [PageSlider],
//     componentDidMount: function(){
//         router.addRoute('',function(){
//             this.slidePage(<HomePage key="home" />);
//         }.bind(this));
//         router.addRoute('pageone',function(){
//             this.slidePage(<PageOne key="pageone" />);
//         }.bind(this));
//         router.addRoute('pagetwo',function(){
//             this.slidePage(<PageTwo key="pagetwo" />);
//         }.bind(this));
//         router.start();
//     }
// });

var HomePage = React.createClass({displayName: "HomePage",
    getInitialState: function(){
        return{
            headingOne: 'Heading 1',
            headingTwo: 'Heading 2',
            headingThree: 'Heading 3'
        }
    },

    render: function() {
        return (
        React.createElement("div", null, 
            React.createElement(SideMenu, null), 
            React.createElement("div", {className: "navbar navbar-inverse navbar-fixed-top"}, 
                React.createElement(ButtonSearch, null), 
                React.createElement(ButtonShopCart, null), 
                React.createElement(SideTriggerMenu, null)
            ), 

            React.createElement("div", {className: "jumbotron"}, 
              React.createElement("div", {className: "container"}, 

                React.createElement(Banner, null), 

                React.createElement("p", null, "This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique."), 
                React.createElement("p", null, React.createElement("a", {className: "btn btn-primary btn-lg"}, "Learn more »"))
              )
            ), 

            React.createElement("div", {className: "container"}, 

              React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-lg-4"}, 
                  React.createElement("h2", null, this.state.headingOne), 
                  React.createElement("p", null, "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. "), 
                  React.createElement("p", null, React.createElement("a", {className: "btn btn-default", href: "#"}, "View details »"))
                ), 
                React.createElement("div", {className: "col-lg-4"}, 
                  React.createElement("h2", null, this.state.headingTwo), 
                  React.createElement("p", null, "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. "), 
                  React.createElement("p", null, React.createElement("a", {className: "btn btn-default", href: "#"}, "View details »"))
               ), 
                React.createElement("div", {className: "col-lg-4"}, 
                  React.createElement("h2", null, this.state.headingThree), 
                  React.createElement("p", null, "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."), 
                  React.createElement("p", null, React.createElement("a", {className: "btn btn-default", href: "#"}, "View details »"))
                )
              ), 

              React.createElement("hr", null), 

              React.createElement("footer", null, 
                React.createElement("p", null, "© Company 2013")
              )
            )
            
        )
    

            );
    }
});

var SideMenu = React.createClass({displayName: "SideMenu",
    render: function() {
        return (
            React.createElement("nav", null, 
                React.createElement("ul", {className: "list-unstyled main-menu"}, 
                  

                  React.createElement("li", {className: "text-left"}, React.createElement("a", {href: "#", id: "nav-close"}, React.createElement("i", {className: "fa fa-circle-thin"}), "Beestore.")), 
                  React.createElement("li", null, React.createElement("a", {href: "#pageone"}, "Menu One ", React.createElement("span", {className: "icon"}))), 
                  React.createElement("li", null, React.createElement("a", {href: "#pagetwo"}, "Menu Two ", React.createElement("span", {className: "icon"}))), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Menu Three ", React.createElement("span", {className: "icon"}))), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Dropdown"), 
                    React.createElement("ul", {className: "list-unstyled"}, 
                        React.createElement("li", {className: "sub-nav"}, React.createElement("a", {href: "#"}, "Sub Menu One ", React.createElement("span", {className: "icon"}))), 
                        React.createElement("li", {className: "sub-nav"}, React.createElement("a", {href: "#"}, "Sub Menu Two ", React.createElement("span", {className: "icon"}))), 
                        React.createElement("li", {className: "sub-nav"}, React.createElement("a", {href: "#"}, "Sub Menu Three ", React.createElement("span", {className: "icon"}))), 
                        React.createElement("li", {className: "sub-nav"}, React.createElement("a", {href: "#"}, "Sub Menu Four ", React.createElement("span", {className: "icon"}))), 
                        React.createElement("li", {className: "sub-nav"}, React.createElement("a", {href: "#"}, "Sub Menu Five ", React.createElement("span", {className: "icon"})))
                    )
                  ), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Menu Four ", React.createElement("span", {className: "icon"}))), 
                  React.createElement("li", null, React.createElement("a", {href: "#"}, "Menu Five ", React.createElement("span", {className: "icon"})))
                )
            )
        );
    }
});

var SideTriggerMenu = React.createClass({displayName: "SideTriggerMenu",
    render: function() {
        return (
            React.createElement("div", {className: "navbar-header pull-left"}, 
                  React.createElement("a", {id: "nav-expander", className: "nav-expander fixed"}, 
                    React.createElement("i", {className: "fa fa-bars white"})
                  )
                )
        );
    }
});

var ButtonSearch = React.createClass({displayName: "ButtonSearch",
    render: function() {
        return (
            React.createElement("a", {className: "navright-menu pull-right white", href: "#"}, React.createElement("i", {className: "fa fa-search"}))
        );
    }
});

var ButtonShopCart = React.createClass({displayName: "ButtonShopCart",
    render: function() {
        return (
            React.createElement("a", {className: "navright-menu pull-right white", href: "#"}, React.createElement("i", {className: "fa fa-shopping-cart"}))
        );
    }
});

var Banner = React.createClass({displayName: "Banner",
    render: function() {
        return (
            React.createElement("div", {id: "owl-demo", className: "owl-carousel owl-theme"}, 
              React.createElement("div", {className: "item"}, React.createElement("img", {src: "assets/dawn1.jpg", alt: "The Last of us"})), 
              React.createElement("div", {className: "item"}, React.createElement("img", {src: "assets/dawn1.jpg", alt: "GTA V"})), 
              React.createElement("div", {className: "item"}, React.createElement("img", {src: "assets/dawn1.jpg", alt: "Mirror Edge"}))
            )
        );
    }
});



React.render(
    React.createElement(HomePage, null), document.getElementById('example')
  );