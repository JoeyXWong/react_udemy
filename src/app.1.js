//jsx

const app={
    title: 'Indecision App',
    subtitle: 'This is some new info!',
    options: [],
}

const onFormSubmit = (e) => {
    e.preventDefault(); //stop full page refresh
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const wipeOutOptions = () =>{
    app.options = [];
    renderApp();
}

const numbers = [55, 101, 1000];
const onMakeDecision = () =>{
    const randomNumber = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNumber]);
};

const isLengthOfArrayZero = () => app.options.length === 0;

const renderApp = () =>{
const template = (
    <div>
        {app.title && <h1>{app.title}</h1>}
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options': 'No option'}</p>
        <button disabled={isLengthOfArrayZero()} onClick={onMakeDecision}>What should I do?</button>
        <button disabled={isLengthOfArrayZero()}onClick={wipeOutOptions}>Remove All</button>
        <ol>
        {
            app.options.map((element)=> <li key={element}>{element + ' '}</li>)
        }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
            <button>Submit</button>
        </form>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
};
renderApp();