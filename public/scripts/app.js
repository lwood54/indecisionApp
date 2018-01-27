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
    options: []
};

var onFormSubmit = function onFormSubmit(ev) {
    ev.preventDefault();

    var option = ev.target.elements.option.value;

    if (option) {
        app.options.push(option);
        ev.target.elements.option.value = '';
        // re-render app
        render();
    }
};

// create 'remove all" button above list
// onClick handler, completely wipe options array, re-render
var removeAll = function removeAll(ev) {
    app.options = [];
    render();
};

var appRoot = document.getElementById("app");

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    console.log(option);
};

var render = function render() {
    // JSX - JavaScript XML
    var template = React.createElement(
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
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
