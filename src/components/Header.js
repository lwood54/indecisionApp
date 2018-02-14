import React from 'react';

// stateless functional component
const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
);

// you can add on default properties after a component has been created
Header.defaultProps = {
    title: 'Indecision'
};

export default Header;