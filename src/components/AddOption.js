import React from 'react';

// keep this a class based component because a state within the component is needed
export default class AddOption extends React.Component {
    // NEW ES6 CLASS SYNTAX
    state = {
        error: undefined
    };
    // we handle the error in class because there is no need for
    // the parent to have control over this

    // we have to add a constructor here because we are using 'this' within
    // a class method, so we need to make sure to have access to the this object

    handleAddOption = (ev) => {
        // prevents the default, which includes a full page refresh
        ev.preventDefault();
        const option = ev.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
                        // error: error is the same as {error}
                        // it is short hand
        this.setState(() => ({error}));

        if (!error) {
            ev.target.elements.option.value = '';
        }
    };
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