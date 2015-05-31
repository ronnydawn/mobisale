var ButtonToolbar = ReactBootstrap.ButtonToolbar;

const buttonsInstance = (
  React.createElement(ButtonToolbar, null, 
    React.createElement(Button, {bsStyle: "primary", bsSize: "large", active: true}, "Primary button"), 
    React.createElement(Button, {bsSize: "large", active: true}, "Button")
  )
);

React.render(buttonsInstance, document.getElementById('example'));