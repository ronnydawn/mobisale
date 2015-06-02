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
            React.createElement(Banner, null), 

            React.createElement("div", {className: "panel panel-default category-header"}, 
                React.createElement("div", {className: "panel-body"}, 
                  "Basic panel example ", React.createElement("a", {className: "pull-right", href: "#"}, "More >")
                )
              ), 
            React.createElement("div", {className: "container"}, 
              
            React.createElement(ProductBanner, null)
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

              React.createElement(FooterMenu, null)
               
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
            React.createElement("div", {id: "owl-banner", className: "owl-carousel owl-theme"}, 
              React.createElement("div", {className: "item"}, React.createElement("img", {src: "assets/cow.jpg", alt: "The Last of us"})), 
              React.createElement("div", {className: "item"}, React.createElement("img", {src: "assets/cow.jpg", alt: "GTA V"})), 
              React.createElement("div", {className: "item"}, React.createElement("img", {src: "assets/cow.jpg", alt: "Mirror Edge"}))
            )
        );
    }
});

var ProductBanner = React.createClass({displayName: "ProductBanner",
  render: function() {
    return (
      React.createElement("div", {id: "owl-product-banner", className: "owl-carousel"}, 
        React.createElement("div", {className: "item"}, React.createElement("img", {className: "lazyOwl", "data-src": "assets/square-cow.jpg", alt: "Lazy Owl Image"})), 
        React.createElement("div", {className: "item"}, React.createElement("img", {className: "lazyOwl", "data-src": "assets/square-cow.jpg", alt: "Lazy Owl Image"})), 
        React.createElement("div", {className: "item"}, React.createElement("img", {className: "lazyOwl", "data-src": "assets/square-cow.jpg", alt: "Lazy Owl Image"})), 
        React.createElement("div", {className: "item"}, React.createElement("img", {className: "lazyOwl", "data-src": "assets/square-cow.jpg", alt: "Lazy Owl Image"})), 
        React.createElement("div", {className: "item"}, React.createElement("img", {className: "lazyOwl", "data-src": "assets/square-cow.jpg", alt: "Lazy Owl Image"}))
      )
    );
  }
});

var FooterMenu = React.createClass({displayName: "FooterMenu",
  render: function() {
    return (
          React.createElement("footer", null, 
        React.createElement("div", {className: "navbar-fixed-bottom"}, 

        React.createElement("div", {className: "btn-group btn-group-justified", role: "group", "aria-label": "..."}, 
          React.createElement("div", {className: "btn-group", role: "group"}, 
            React.createElement("button", {type: "button", className: "btn btn-default"}, "Home")
          ), 
          React.createElement("div", {className: "btn-group", role: "group"}, 
            React.createElement("button", {type: "button", className: "btn btn-default"}, "Account")
          ), 
          React.createElement("div", {className: "btn-group", role: "group"}, 
            React.createElement("button", {type: "button", className: "btn btn-default"}, "Chart")
          ), 
          React.createElement("div", {className: "btn-group", role: "group"}, 
            React.createElement("button", {type: "button", className: "btn btn-default"}, "News")
          )
        )

        )
    )
    );
  }
});

React.render(
    React.createElement(HomePage, null), document.getElementById('example')
  );