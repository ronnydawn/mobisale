'use strict';

var New = React.createClass({displayName: "New",
  render: function() {
    return (
        React.createElement("div", {id: "wrapper"}, 
            React.createElement("div", {className: "overlay"}), 

            React.createElement("nav", {className: "navbar navbar-inverse navbar-fixed-top", id: "sidebar-wrapper", role: "navigation"}, 
                React.createElement("ul", {className: "nav sidebar-nav"}, 
                    React.createElement("li", {className: "sidebar-brand"}, 
                        React.createElement("a", {href: "#"}, 
                            "Brand"
                        )
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "#"}, "Home")
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "#"}, "About")
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "#"}, "Events")
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "#"}, "Team")
                    ), 
                    React.createElement("li", {className: "dropdown"}, 
                        React.createElement("a", {href: "#", className: "dropdown-toggle", "data-toggle": "dropdown"}, "Works ", React.createElement("span", {className: "caret"})), 
                        React.createElement("ul", {className: "dropdown-menu", role: "menu"}, 
                            React.createElement("li", {className: "dropdown-header"}, "Dropdown heading"), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Action")), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Another action")), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Something else here")), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "Separated link")), 
                            React.createElement("li", null, React.createElement("a", {href: "#"}, "One more separated link"))
                        )
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "#"}, "Services")
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "#"}, "Contact")
                    ), 
                    React.createElement("li", null, 
                        React.createElement("a", {href: "https://twitter.com/maridlcrmn"}, "Follow me")
                    )
                )
            ), 

            React.createElement("div", {id: "page-content-wrapper"}, 
                React.createElement("button", {type: "button", className: "hamburger is-closed", "data-toggle": "offcanvas"}, 
                    React.createElement("span", {className: "hamb-top"}), 
                    React.createElement("span", {className: "hamb-middle"}), 
                    React.createElement("span", {className: "hamb-bottom"})
                ), 
                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-lg-8 col-lg-offset-2"}, 
                            React.createElement("h1", null, "Fancy Toggle Sidebar Navigation"), 
                            React.createElement("p", null, "Bacon ipsum dolor sit amet tri-tip shoulder tenderloin shankle. Bresaola tail pancetta ball tip doner meatloaf corned beef. Kevin pastrami tri-tip prosciutto ham hock pork belly bacon pork loin salami pork chop shank corned beef tenderloin meatball cow. Pork bresaola meatloaf tongue, landjaeger tail andouille strip steak tenderloin sausage chicken tri-tip. Pastrami tri-tip kielbasa sausage porchetta pig sirloin boudin rump meatball andouille chuck tenderloin biltong shank "), 
                            React.createElement("p", null, "Pig meatloaf bresaola, spare ribs venison short loin rump pork loin drumstick jowl meatball brisket. Landjaeger chicken fatback pork loin doner sirloin cow short ribs hamburger shoulder salami pastrami. Pork swine beef ribs t-bone flank filet mignon, ground round tongue. Tri-tip cow turducken shank beef shoulder bresaola tongue flank leberkas ball tip."), 
                            React.createElement("p", null, "Filet mignon brisket pancetta fatback short ribs short loin prosciutto jowl turducken biltong kevin pork chop pork beef ribs bresaola. Tongue beef ribs pastrami boudin. Chicken bresaola kielbasa strip steak biltong. Corned beef pork loin cow pig short ribs boudin bacon pork belly chicken andouille. Filet mignon flank turkey tongue. Turkey ball tip kielbasa pastrami flank tri-tip t-bone kevin landjaeger capicola tail fatback pork loin beef jerky."), 
                            React.createElement("p", null, "Chicken ham hock shankle, strip steak ground round meatball pork belly jowl pancetta sausage spare ribs. Pork loin cow salami pork belly. Tri-tip pork loin sausage jerky prosciutto t-bone bresaola frankfurter sirloin pork chop ribeye corned beef chuck. Short loin hamburger tenderloin, landjaeger venison porchetta strip steak turducken pancetta beef cow leberkas sausage beef ribs. Shoulder ham jerky kielbasa. Pig doner short loin pork chop. Short ribs frankfurter rump meatloaf."), 
                            React.createElement("p", null, "Filet mignon biltong chuck pork belly, corned beef ground round ribeye short loin rump swine. Hamburger drumstick turkey, shank rump biltong pork loin jowl sausage chicken. Rump pork belly fatback ball tip swine doner pig. Salami jerky cow, boudin pork chop sausage tongue andouille turkey.")
                        )
                    )
                )
            )

        )
);
  }
});

React.render(
  React.createElement(New, null), document.getElementById('example')
);