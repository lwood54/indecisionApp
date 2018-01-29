// RE-DO of Counter App using "state"
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count,
            name: 'Logan'
        };
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

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter count={5} />, document.getElementById('app'));









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