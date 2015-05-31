'use strict';

var New = React.createClass({
	render: function() {
		return (
<div className="off-canvas-wrap" data-offcanvas>
  <div className="inner-wrap">
    <nav className="tab-bar">
      <section className="left-small">
        <a className="left-off-canvas-toggle menu-icon" href="#"><span></span></a>
      </section>

      <section className="middle tab-bar-section">
        <h1 className="title">Foundation</h1>
      </section>

      <section className="right-small">
        <a className="right-off-canvas-toggle menu-icon" href="#"><span></span></a>
      </section>
    </nav>

    <aside className="left-off-canvas-menu">
      <ul className="off-canvas-list">
        <li><label>Foundation</label></li>
        <li><a href="#">The Psychohistorians</a></li>
        <li><a href="#">...</a></li>
      </ul>
    </aside>

    <aside className="right-off-canvas-menu">
      <ul className="off-canvas-list">
        <li><label>Users</label></li>
        <li><a href="#">Hari Seldon</a></li>
        <li><a href="#">...</a></li>
      </ul>
    </aside>

    <section className="main-section">
  
    </section>

  <a className="exit-off-canvas"></a>

  </div>
</div>
		);
	}
});

React.render(
	<New />, document.getElementById('example')
);