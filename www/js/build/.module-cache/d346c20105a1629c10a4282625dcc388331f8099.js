'use strict';

var Test = React.createClass({displayName: "Test",
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("nav", {className: "navbar-default navbar-static-top"}, 
				  React.createElement("div", {className: "container-fluid", role: "group"}, 
			    	React.createElement("div", {class: "row"}, 
					  React.createElement("div", {class: "col-md-4"}, React.createElement("button", {type: "button", className: "navbar-left btn btn-default navbar-btn glyphicon glyphicon-menu-hamburger"})), 
					  React.createElement("div", {class: "col-md-4"}, ".col-md-4"), 
					  React.createElement("div", {class: "col-md-4"}, React.createElement("button", {type: "button", className: "navbar-right btn btn-default navbar-btn glyphicon glyphicon-search"}), React.createElement("button", {type: "button", className: "navbar-right btn btn-default navbar-btn glyphicon glyphicon-shopping-cart"}))
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