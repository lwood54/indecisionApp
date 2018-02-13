import React from 'react';
import AddOption from './AddOption'; // can leave off .js here
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    
    handleDeleteOptions = () => {
        // if passing an option, you need to put the {} inside ()
        this.setState(() => ({options: []}));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }; 

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    };

    // life cycle method only available in class based components
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
        
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (err) {

        }
        
    }

    // life cycle method only available in class based components
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
        
        
    }

    // life cycle method only available in class based components
    componentWillUnmount() {
        console.log('componentWillUnmount!');
        
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
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}