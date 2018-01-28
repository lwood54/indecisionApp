// JSX file that will auto-generate content via babel and output to: public/scripts/app.js
// command line: babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('App.js is running!');

// create app object title/subtitle
// use title/subtitle in the template
// render template

const app = {
    title: 'Indecision App',
    subtitle: "We've got you covered.",
    options: []
};

const onFormSubmit = (ev) => {
    ev.preventDefault();
    
    const option = ev.target.elements.option.value;
    
    if(option) {
        app.options.push(option);
        ev.target.elements.option.value = '';
        // re-render app
        render();
    }
};


// create 'remove all" button above list
// onClick handler, completely wipe options array, re-render
const removeAll = (ev) => {
    app.options = [];
    render();
};

const appRoot = document.getElementById("app");

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
};

const render = () => {
    // JSX - JavaScript XML
    const template =(
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {/* map over app.options getting an array of lis (set key and text for each)*/}
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();
