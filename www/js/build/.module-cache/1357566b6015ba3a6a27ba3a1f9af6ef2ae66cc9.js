'use strict';

var Test = React.createClass({displayName: "Test",
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("nav", {role: "navigation", class: "navbar navbar-fixed-top navbar-default"}, 
    				React.createElement("div", {class: "container-fluid"}, 
    				React.createElement("span", {class: "glyphicon glyphicon-search", "aria-hidden": "true"})
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