
// We are rendering this Component while nesting the other
// components in here. Some of those components have nested
// components of their own. We have to pass key=value pairs
// as, essentially, attributes in order to be able to access
// them in the components that are nested within.
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = "We've got you covered";
        const options = ['Thing one', 'Thing two', 'Thing four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    // set up in class method to use instead of global method
    handlePick() {
        alert('Handle pick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}



// <Option />   works the same as <Option></Option>
class Options extends React.Component {
    handleRemoveAll() {
        alert('all your base are belong to us');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button> 
                { // JS expressions can go in here
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }               
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        );
    }
}
class AddOption extends React.Component {
    handleAddOption(ev) {
        // prevents the default, which includes a full page refresh
        ev.preventDefault();
        const option = ev.target.elements.option.value.trim();
        ev.target.elements.option.value = '';
        if (option) {
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));