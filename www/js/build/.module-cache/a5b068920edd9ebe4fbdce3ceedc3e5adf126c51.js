'use strict';

var Test = React.createClass({displayName: "Test",
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("nav", {className: "navbar-default navbar-fixed-top"}, 

				React.createElement("div", {className: "container"}, 
		    		React.createElement("a", {className: "navbar-left navbar-brand", href: "#"}, 
		      			React.createElement("p", {className: "glyphicon glyphicon-menu-hamburger"})
		      		), 
		      		React.createElement("p", {className: "navbar-text"}, "Mobisale."), 
		      		React.createElement("a", {className: "navbar-right navbar-brand", href: "#"}, 
		      			React.createElement("p", {className: "glyphicon glyphicon-shopping-cart"})
		      		), 
		      		React.createElement("a", {className: "navbar-right navbar-brand", href: "#"}, 
		      			React.createElement("p", {className: "glyphicon glyphicon-search"})
		      		)
				), 
				

				React.createElement("div", {className: "btn-group btn-group-justified", role: "group", "aria-label": "..."}, 
					React.createElement("div", {className: "btn-group", role: "group"}, 
				    	React.createElement("button", {type: "button", className: "btn btn-default"}, "Left")
				  	), 
				  	React.createElement("div", {className: "btn-group", role: "group"}, 
				    	React.createElement("button", {type: "button", className: "btn btn-default"}, "Middle")
				  	), 
				  	React.createElement("div", {className: "btn-group", role: "group"}, 
				    	React.createElement("button", {type: "button", className: "btn btn-default"}, "Right")
				  	)
				)
				)
			)
		);
	}
});

React.render(
	React.createElement(Test, null), document.getElementById('example')
);