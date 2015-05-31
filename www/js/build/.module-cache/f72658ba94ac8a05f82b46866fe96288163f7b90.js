'use strict';

var Test = React.createClass({displayName: "Test",
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("div", {className: "navbar"}, 
				  React.createElement("div", {className: "navbar-inner"}, 
				    React.createElement("a", {className: "brand", href: "#"}, "Title"), 
				    React.createElement("ul", {className: "nav"}, 
				      React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "Home")), 
				      React.createElement("li", null, React.createElement("a", {href: "#"}, "Link")), 
				      React.createElement("li", null, React.createElement("a", {href: "#"}, "Link"))
				    )
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
		);
	}
});

React.render(
	React.createElement(Test, null), document.getElementById('example')
);