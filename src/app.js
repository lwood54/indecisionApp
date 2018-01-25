// JSX file that will auto-generate content via babel and output to: public/scripts/app.js
// command line: babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('App.js is running!');

// create app object title/subtitle
// use title/subtitle in the template
// render template

const app = {
    title: 'Indecision App',
    subtitle: "We've got you covered.",
    options: ['one', 'two']
}

// JSX - JavaScript XML
const template =(
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

let count = 0;
const addOne = () => {
    console.log('added one');
    count++;
    console.log('count: ', count);
    
};
const minusOne = () => {
    console.log('subtracted one');
    count--;
    console.log('count: ', count);
};
const reset = () => {
    console.log('reset');
    count = 0;
    console.log('count: ', count);
};
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+ 1</button>
        <button onClick={minusOne}>- 1</button>
        <button onClick={reset}>reset</button>
    </div>
);


console.log(templateTwo);


const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);

