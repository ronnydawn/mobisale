'use strict';

var New = React.createClass({
  render: function() {
    return (
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="components.html">Components</a></li>
        <li><a href="javascript.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
    );
  }
});

React.render(
  <New />, document.getElementById('example')
);