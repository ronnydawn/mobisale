'use strict';

var Header = React.createClass({
    render: function() {
        return (
<nav className="navbar navbar-default">
  <div className="container-fluid">

    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Brand</a>
    </div>


    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
      </ul>
    </div>

  </div>
</nav>
        );
    }
});

var New = React.createClass({
  render: function() {
    return (
        <div id="wrapper">
            <div className="overlay"></div>

            <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
                <ul className="nav sidebar-nav">
                    <li className="sidebar-brand">
                        <a href="#" id="brand-side">
                            Brand
                        </a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Events</a>
                    </li>
                    <li>
                        <a href="#">Team</a>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Works <span className="caret"></span></a>
                        <ul className="dropdown-menu" role="menu">
                            <li className="dropdown-header">Dropdown heading</li>
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/maridlcrmn">Follow me</a>
                    </li>
                </ul>
            </nav>

                 <button type="button" className="hamburger nav navbar-nav is-closed" data-toggle="offcanvas">
                    <span className="hamb-top"></span>
                    <span className="hamb-middle"></span>
                    <span className="hamb-bottom"></span>
                </button>

            <div className="navbar navbar-inverse navbar-fixed-top navbar-collapse wrapper" id="top-wrapper">



            </div>

            <div id="page-content-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <h1>Fancy Toggle Sidebar Navigation</h1>
                        </div>
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