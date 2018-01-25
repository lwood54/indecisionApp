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

var count = 0;
var addOne = function addOne() {
    console.log('added one');
    count++;
    console.log('count: ', count);
};
var minusOne = function minusOne() {
    console.log('subtracted one');
    count--;
    console.log('count: ', count);
};
var reset = function reset() {
    console.log('reset');
    count = 0;
    console.log('count: ', count);
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+ 1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '- 1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);

console.log(templateTwo);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
