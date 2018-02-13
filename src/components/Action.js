import React from 'react';

//stateless functional version of Action component
const Action = (props) => (
    <div>
        <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What should I do?
        </button>
    </div>
);

export default Action;