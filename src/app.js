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
}

// JSX - JavaScript XML
var template =(
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Logan',
    age: 35,
    location: 'Fort Worth'
}
var userName = 'Percival';
var userAge = 36;
var userLocation = 'Dallas';
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

// the else {
//      returns undefined
//  }
// which can be very useful as nothing will be rendered through JSX
function getLocation(location) {
    if (location) {
        return (<p>Location: {location}</p>);
    }
}

var appRoot = document.getElementById("app");

// ReactDOM.render(template, appRoot);
ReactDOM.render(template, appRoot);

