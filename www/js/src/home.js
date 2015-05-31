'use strict';

var Test = React.createClass({
	render: function() {
		return (
			<div>
				<div className="off-canvas-wrap" data-offcanvas>
				  <div className="inner-wrap">
				    <nav className="tab-bar">
				      <section className="left-small" style={{borderRight:'0'}}>
				        <a className="left-off-canvas-toggle menu-icon" href="#"><span></span></a>
				      </section>

				      <section className="middle tab-bar-section">
				        <h1 className="title">Mobisale.</h1>
				      </section>

				      <section className="right-small" style={{width: '5.8125rem', borderLeft:'0'}}>
				        <a className="step fi-magnifying-glass" style={{color:'#fff', fontSize:'27px', paddingLeft:'10px'}}></a>
				        <a className="step fi-shopping-cart" style={{color:'#fff', fontSize:'27px', paddingLeft:'20px'}}></a>
				      </section>
				    </nav>

				    <aside className="left-off-canvas-menu">
				      <ul className="off-canvas-list">
				        <li><label>Beestore.</label></li>
				        <li><a href="#">Category</a></li>
				        <li><a href="#">...</a></li>
				      </ul>
				    </aside>

				    <section className="main-section">
				    	<Sectoin first="Ronny" last="Dinihari"/>
				    	<Sectoin first="Dinihari" last="Ronny"/>
				    </section>

				  <a className="exit-off-canvas"></a>

				  </div>
				</div>
			</div>
		);
	}
});

var Sectoin = React.createClass({
	render: function() {
		return (
			<div>
				<h1>{this.props.first}, {this.props.last}</h1>
			</div>
		);
	}
});

React.render(
	<Test />, document.getElementById('example')
);