'use strict';

var New = React.createClass({displayName: "New",
	render: function() {
		return (
	React.createElement("div", {className: "viewport"}, 
      React.createElement("div", {className: "frame"}, 
        React.createElement("div", {idName: "menu", className: "menu nav-collapse collapse width"}, 
          React.createElement("div", {className: "collapse-inner"}, 
            React.createElement("div", {className: "navbar navbar-inverse"}, 
              React.createElement("div", {className: "navbar-inner"}, 
                "Menu"
              )
            ), 
            React.createElement("ul", {className: "nav nav-tabs nav-stacked"}, 
              React.createElement("li", null, React.createElement("a", null, "Futurama")), 
              React.createElement("li", null, React.createElement("a", null, "Star Wars")), 
              React.createElement("li", null, React.createElement("a", null, "Doctor Who"))
            )
          )
        ), 

        React.createElement("div", {className: "view"}, 
          React.createElement("div", {className: "navbar navbar-inverse"}, 
            React.createElement("div", {className: "navbar-inner"}, 
              React.createElement("button", {type: "button", className: "btn btn-navbar", "data-toggle": "collapse", "data-target": "#menu"}, 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"})
              )
            )
          ), 
          React.createElement("div", {idName: "content"}, 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et lacus at justo facilisis vehicula ut et felis. Phasellus ut libero pretium nibh sollicitudin vulputate a sed urna. Ut dictum odio a est sodales blandit. Integer vitae nisl nisi, quis vehicula diam. Sed nec erat dictum nisi suscipit placerat. Quisque ligula enim, porttitor at sollicitudin eu, aliquet et justo. Ut eu dolor metus. Etiam vitae justo at metus auctor egestas ac in dolor. Etiam facilisis urna ipsum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer vulputate, sapien sit amet suscipit pellentesque, est ipsum tempor erat, eu molestie risus dolor sit amet risus. Vestibulum adipiscing gravida tincidunt. Integer eu quam et lacus luctus molestie."
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