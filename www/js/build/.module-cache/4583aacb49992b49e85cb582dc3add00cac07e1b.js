'use strict';

var New = React.createClass({displayName: "New",
	render: function() {
		return (
			React.createElement("div", {className: "primary title-bar"}, 
				React.createElement("div", {className: "center title"}, "Center"), 
				React.createElement("span", {className: "left"}, React.createElement("a", {href: "#"}, "Left")), 
				React.createElement("span", {className: "right"}, React.createElement("a", {href: "#"}, "Right"))
			)
		);
	}
});