'use strict';

var New = React.createClass({
	render: function() {
		return (
    <div className="navbar">
      <div className="navbar-inner">
        <a className="brand" href="#">Title</a>
        <ul className="nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
        </ul>
      </div>
    </div>
		);
	}
});

React.render(
	<New />, document.getElementById('example')
	);