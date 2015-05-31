'use strict';

var Header = React.createClass({displayName: "Header",
    render: function() {
        return (
React.createElement("ion-side-menus", null, 

  React.createElement("ion-side-menu-content", {"ng-controller": "ContentController"}
  ), 


  React.createElement("ion-side-menu", {side: "left"}
  ), 


  React.createElement("ion-side-menu", {side: "right"}
  ), 

  React.createElement("ion-side-menu-content", null

  )
)
            );
    }
});

React.render(
    React.createElement(Header, null), document.getElementById('example')
  );