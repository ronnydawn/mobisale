'use strict';

var Test = React.createClass({displayName: "Test",
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("nav", {className: "navbar navbar-fixed-top navbar-default"}, 
    				React.createElement("div", {className: "container-fluid"}, 
    					React.createElement("div", {className: "col-xs-6 col-sm-4"}, ".col-xs-6 .col-sm-4"), 
    					React.createElement("div", {className: "col-xs-6 col-sm-4"}, ".col-xs-6 .col-sm-4"), 
    					React.createElement("div", {className: "col-xs-6 col-sm-4"}, ".col-xs-6 .col-sm-4")
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