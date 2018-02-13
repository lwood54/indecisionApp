import React from 'react';

// stateless functional component
const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
);

// you can add on default properties after a component has been created
Header.defaultProps = {
    title: 'Indecision'
};

export default Header;