'use strict';

// var App = React.createClass({
//     // mixins: [PageSlider],
//     componentDidMount: function(){
//         router.addRoute('',function(){
//             this.slidePage(<HomePage key="home" />);
//         }.bind(this));
//         router.addRoute('pageone',function(){
//             this.slidePage(<PageOne key="pageone" />);
//         }.bind(this));
//         router.addRoute('pagetwo',function(){
//             this.slidePage(<PageTwo key="pagetwo" />);
//         }.bind(this));
//         router.start();
//     }
// });

var HomePage = React.createClass({
    getInitialState: function(){
        return{
            headingOne: 'Heading 1',
            headingTwo: 'Heading 2',
            headingThree: 'Heading 3'
        }
    },

    render: function() {
        return (
        <div>
            <SideMenu />          
            <div className="navbar navbar-inverse navbar-fixed-top">      
                <ButtonSearch />
                <ButtonShopCart />
                <SideTriggerMenu />
            </div>

            <div className="jumbotron">
              <div className="container">

                <Banner />

                <p>It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                <p><a className="btn btn-primary btn-lg">Learn more &raquo;</a></p>
              </div>
            </div>

            <div className="container">

              <div className="row">
                <div className="col-lg-4">
                  <h2>{this.state.headingOne}</h2>
                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                  <p><a className="btn btn-default" href="#">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                  <h2>{this.state.headingTwo}</h2>
                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                  <p><a className="btn btn-default" href="#">View details &raquo;</a></p>
               </div>
                <div className="col-lg-4">
                  <h2>{this.state.headingThree}</h2>
                  <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                  <p><a className="btn btn-default" href="#">View details &raquo;</a></p>
                </div>
              </div>

              <hr/>

              <footer>
                <p>&copy; Company 2013</p>
              </footer>
            </div>
            
        </div>
    

            );
    }
});

var SideMenu = React.createClass({
    render: function() {
        return (
            <nav>
                <ul className="list-unstyled main-menu">
                  

                  <li className="text-left"><a href="#" id="nav-close"><i className="fa fa-circle-thin"></i>Beestore.</a></li>
                  <li><a href="#pageone">Menu One <span className="icon"></span></a></li>
                  <li><a href="#pagetwo">Menu Two <span className="icon"></span></a></li>
                  <li><a href="#">Menu Three <span className="icon"></span></a></li>
                  <li><a href="#">Dropdown</a>
                    <ul className="list-unstyled">
                        <li className="sub-nav"><a href="#">Sub Menu One <span className="icon"></span></a></li>
                        <li className="sub-nav"><a href="#">Sub Menu Two <span className="icon"></span></a></li>
                        <li className="sub-nav"><a href="#">Sub Menu Three <span className="icon"></span></a></li>
                        <li className="sub-nav"><a href="#">Sub Menu Four <span className="icon"></span></a></li>
                        <li className="sub-nav"><a href="#">Sub Menu Five <span className="icon"></span></a></li>
                    </ul>
                  </li>
                  <li><a href="#">Menu Four <span className="icon"></span></a></li>
                  <li><a href="#">Menu Five <span className="icon"></span></a></li>
                </ul>
            </nav>
        );
    }
});

var SideTriggerMenu = React.createClass({
    render: function() {
        return (
            <div className="navbar-header pull-left">
                  <a id="nav-expander" className="nav-expander fixed">
                    <i className="fa fa-bars white"></i>
                  </a>
                </div>
        );
    }
});

var ButtonSearch = React.createClass({
    render: function() {
        return (
            <a className="navright-menu pull-right white" href="#"><i className="fa fa-search"></i></a>
        );
    }
});

var ButtonShopCart = React.createClass({
    render: function() {
        return (
            <a className="navright-menu pull-right white" href="#"><i className="fa fa-shopping-cart"></i></a>
        );
    }
});

var Banner = React.createClass({
    render: function() {
        return (
            <div id="owl-demo" className="owl-carousel owl-theme">
              <div className="item"><img src="assets/cow.jpg" alt="The Last of us" /></div>
              <div className="item"><img src="assets/cow.jpg" alt="GTA V" /></div>
              <div className="item"><img src="assets/cow.jpg" alt="Mirror Edge" /></div>
            </div>
        );
    }
});

React.render(
    <HomePage />, document.getElementById('example')
  );