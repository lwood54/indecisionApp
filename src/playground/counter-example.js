// RE-DO of Counter App using "state"
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
            name: 'Logan'
        };
    }

    componentDidMount() {
        try {
            const count = parseInt(localStorage.getItem('count'),10);

            if (!isNaN(count) && count) {
                console.log('fetching data');
                this.setState(() => ({ count }));
                // same as saying this:
                // this.setState(() => ({count: count}));
            }
        } catch (error) {
            
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const count = this.state.count;
        if (prevState.count !== count) {
            localStorage.setItem('count', count);
            console.log('saving data to local storage');
        }
    }

    handleAddOne() {
        // this.setState({count: this.state.count + 1});    // ALSO WORKED
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });      
    }
    handleMinusOne() {
        // this.setState({count: this.state.count - 1});
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        }); 
    }
    handleReset() {
        // this.setState({count: 0});
        this.setState(() => {
            return {
                count: 0
            };
        }); 
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+ 1</button>
                <button onClick={this.handleMinusOne}>- 1</button>
                <button onClick={this.handleReset}>RESET</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// };

// we also removed count: props.count from constructor function
// we do this because we are currently using localStorage, and later
// we'll be using a database.

ReactDOM.render(<Counter />, document.getElementById('app'));
// Now that we have changed
// count: props.count back to count: 0,
// it no longer does anything with the 'count={5}' in this line:
// ReactDOM.render(<Counter count={5} />, document.getElementById('app'));








// OLD CODE INTRO TO REACT
// let count = 0;
// const addOne = () => {
//     count++;
//     // must re-render each time for the count to be updated to the DOM
//     // the initial rendering is loaded before even the ability to click shows up
//     renderCounterApp();    
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+ 1</button>
//             <button onClick={minusOne}>- 1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();