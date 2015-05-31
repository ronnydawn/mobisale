'use strict';

var Test = React.createClass({displayName: "Test",
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("div", {className: "off-canvas-wrap", "data-offcanvas": true}, 
				  React.createElement("div", {className: "inner-wrap"}, 
				    React.createElement("nav", {className: "tab-bar"}, 
				      React.createElement("section", {className: "left-small", style: {borderRight:'0'}}, 
				        React.createElement("a", {className: "left-off-canvas-toggle menu-icon", href: "#"}, React.createElement("span", null))
				      ), 

				      React.createElement("section", {className: "middle tab-bar-section"}, 
				        React.createElement("h1", {className: "title"}, "Mobisale.")
				      ), 

				      React.createElement("section", {className: "right-small", style: {width: '5.8125rem', borderLeft:'0'}}, 
				        React.createElement("a", {className: "step fi-magnifying-glass", style: {color:'#fff', fontSize:'27px', paddingLeft:'10px'}}), 
				        React.createElement("a", {className: "step fi-shopping-cart", style: {color:'#fff', fontSize:'27px', paddingLeft:'20px'}})
				      )
				    ), 

				    React.createElement("aside", {className: "left-off-canvas-menu"}, 
				      React.createElement("ul", {className: "off-canvas-list"}, 
				        React.createElement("li", null, React.createElement("label", null, "Mobisale.")), 
				        React.createElement("li", null, React.createElement("a", {href: "#"}, "The Psychohistorians")), 
				        React.createElement("li", null, React.createElement("a", {href: "#"}, "..."))
				      )
				    ), 

				    React.createElement("section", {className: "main-section"}, 
				    	React.createElement(Sectoin, {first: "Ronny", last: "Dinihari"}), 
				    	React.createElement(Sectoin, {first: "Dinihari", last: "Ronny"})
				    ), 

				  React.createElement("a", {className: "exit-off-canvas"})

				  )
				)
			)
		);
	}
});

var Sectoin = React.createClass({displayName: "Sectoin",
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("h1", null, this.props.first, ", ", this.props.last)
			)
		);
	}
});

React.render(
	React.createElement(Test, null), document.getElementById('example')
);