const app = {
    title: 'Visibility Toggle',
    details: 'These are the details to which you seek.',
    detailsVis: false
};


const showDetails = () => {
    // basically says if app.detailsVis is true, then set it false, and vice versa
    app.detailsVis ? app.detailsVis = false : app.detailsVis = true;
    render();
};

const rootApp = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={showDetails}>{app.detailsVis ? 'Hide details!' : 'Show details'}</button>
            {app.detailsVis && <p>{app.details}</p>}
        </div>
    );

    ReactDOM.render(template, rootApp);
};

render();