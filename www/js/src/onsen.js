'use strict';

var New = React.createClass({
	render: function() {
		return (
	<div className="viewport">
      <div className="frame">
        <div idName="menu" className="menu nav-collapse collapse width">
          <div className="collapse-inner">
            <div className="navbar navbar-inverse">
              <div className="navbar-inner">
                Menu
              </div>
            </div>
            <ul className="nav nav-tabs nav-stacked">
              <li><a>Futurama</a></li>
              <li><a>Star Wars</a></li>
              <li><a>Doctor Who</a></li>
            </ul>
          </div>
        </div>

        <div className="view">
          <div className="navbar navbar-inverse">
            <div className="navbar-inner">
              <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target="#menu">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
          </div>
          <div idName="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et lacus at justo facilisis vehicula ut et felis. Phasellus ut libero pretium nibh sollicitudin vulputate a sed urna. Ut dictum odio a est sodales blandit. Integer vitae nisl nisi, quis vehicula diam. Sed nec erat dictum nisi suscipit placerat. Quisque ligula enim, porttitor at sollicitudin eu, aliquet et justo. Ut eu dolor metus. Etiam vitae justo at metus auctor egestas ac in dolor. Etiam facilisis urna ipsum. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer vulputate, sapien sit amet suscipit pellentesque, est ipsum tempor erat, eu molestie risus dolor sit amet risus. Vestibulum adipiscing gravida tincidunt. Integer eu quam et lacus luctus molestie.
          </div>
        </div>
      </div>
    </div>
		);
	}
});

React.render(
	<New />, document.getElementById('example')
	);