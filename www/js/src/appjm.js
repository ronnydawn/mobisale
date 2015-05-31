'use strict';

var New = React.createClass({
  render: function() {
    return (
<div data-role="header" style={{overflow:'hidden'}}>
<h1>I'm a header</h1>
    <a href="#" data-icon="gear" className="ui-btn-right">Options</a>
    <div data-role="navbar">
        <ul>
            <li><a href="#">One</a></li>
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
        </ul>
    </div>
</div>
   );
  }
});

React.render(
  <New />, document.getElementById('example')
);