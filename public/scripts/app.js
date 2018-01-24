'use strict';

// JSX file that will auto-generate content via babel and output to: public/scripts/app.js
// command line: babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('App.js is running!');

// create app object title/subtitle
// use title/subtitle in the template
// render template

var app = {
    title: 'Indecision App',
    subtitle: "We've got you covered.",
    options: ['one', 'two']

    // JSX - JavaScript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Logan',
    age: 35,
    location: 'Fort Worth'
};
var userName = 'Percival';
var userAge = 36;
var userLocation = 'Dallas';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

// the else {
//      returns undefined
//  }
// which can be very useful as nothing will be rendered through JSX
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var appRoot = document.getElementById("app");

// ReactDOM.render(template, appRoot);
ReactDOM.render(template, appRoot);
