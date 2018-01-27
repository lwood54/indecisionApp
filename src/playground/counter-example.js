
let count = 0;
const addOne = () => {
    count++;
    // must re-render each time for the count to be updated to the DOM
    // the initial rendering is loaded before even the ability to click shows up
    renderCounterApp();    
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+ 1</button>
            <button onClick={minusOne}>- 1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();