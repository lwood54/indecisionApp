import React from 'react';
import Option from './Option';

// <Option />   works the same as <Option></Option>
const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button> 
        {props.options.length === 0 && <p>Please add an option to getstarted!</p>}
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

export default Options;