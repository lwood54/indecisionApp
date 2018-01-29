
// We are rendering this Component while nesting the other
// components in here. Some of those components have nested
// components of their own. We have to pass key=value pairs
// as, essentially, attributes in order to be able to access
// them in the components that are nested within.
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    handleDeleteOptions() {
        // if passing an option, you need to put the {} inside ()
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    render() {
        const subtitle = "We've got you covered";

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

// stateless functional component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

// you can add on default properties after a component has been created
Header.defaultProps = {
    title: 'Indecision'
};

//stateless functional version of Action component
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                What should I do?
            </button>
        </div>
    );
};


// class based component, in which state is allowed
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >
//                 What should I do?
//                 </button>
//             </div>
//         );
//     }
// }



// <Option />   works the same as <Option></Option>
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button> 
            { // JS expressions can go in here
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }               
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button 
                onClick={(ev) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
}

// keep this a class based component because a state within the component is needed
class AddOption extends React.Component {
    // we have to add a constructor here because we are using 'this' within
    // a class method, so we need to make sure to have access to the this object
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        // we handle the error in class because there is no need for
        // the parent to have control over this
        this.state = {
            error: undefined
        }
    }
    handleAddOption(ev) {
        // prevents the default, which includes a full page refresh
        ev.preventDefault();
        const option = ev.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        ev.target.elements.option.value = '';

                        // error: error is the same as {error}
                        // it is short hand
        this.setState(() => ({error}));
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}


// stateless functional component
// don't allow state, but they do still manage props
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// ReactDOM.render(<User name="Logan" age={35}/>, document.getElementById('app'));