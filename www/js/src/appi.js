'use strict';

var Header = React.createClass({
    render: function() {
        return (
            <div>
    <header role="banner" className="navbar navbar-fixed-top navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button data-toggle="collapse-side" data-target=".side-collapse" data-target-2=".side-collapse-container" type="button" className="navbar-toggle pull-left"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
        </div>
        <div className="navbar-inverse side-collapse in">
          <nav role="navigation" className="navbar-collapse">
            <ul className="nav navbar-nav">
              <li><a href="#Home">Home</a></li>
              <li><a href="#users">Users</a></li>
              <li><a href="http://placesforlove.com">Places</a></li>
            </ul>
          </nav>
        </div>
      </div>

    </header>

    <div className="container side-collapse-container">
      <div className="row">

      </div>
    </div>
    </div>
    

            );
    }
});

React.render(
    <Header />, document.getElementById('example')
  );