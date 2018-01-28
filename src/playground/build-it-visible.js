// USING STATE TO MAKE VISIBILITY TOGGLE APP

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.title = 'Visibility Toggle';
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
            visMessage: 'These are the details to which you seek.'
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
            <h1>{this.title}</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details!' : 'Show details'}</button>
            {this.state.visibility && <p>{this.state.visMessage}</p>}
            </div>
        );
    }
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title: 'Visibility Toggle',
//     details: 'These are the details to which you seek.',
//     detailsVis: false
// };


// const showDetails = () => {
//     // basically says if app.detailsVis is true, then set it false, and vice versa
//     app.detailsVis ? app.detailsVis = false : app.detailsVis = true;
//     render();
// };

// const rootApp = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={showDetails}>{app.detailsVis ? 'Hide details!' : 'Show details'}</button>
//             {app.detailsVis && <p>{app.details}</p>}
//         </div>
//     );

//     ReactDOM.render(template, rootApp);
// };

// render();