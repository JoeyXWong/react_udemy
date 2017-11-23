class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false,
            title: 'Visibility Toggle',
            subTitle: 'Hey. These are some details you can see!',
        };
    }

    handleToggleVisibility(e){
        e.preventDefault();
        this.setState((prevState)=>{
            return {
                visibility : !prevState.visibility,
            }
        });
    }

    render(){
        return(
           <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide Details' : 'Show details'}
        </button>
        {this.state.visibility && (
            <div>
                <p> {this.state.subTitle} </p>
            </div>
        )}
    </div> 
    );
    }
} 

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));
// const app = {
//     title: 'Visibility Toggle',
//     subtitle: 'Hey. These are some details you can see!',
//     toggleText: false,
// }

// const toggleText = ()=>{
//     app.toggleText = !app.toggleText;
//     render();
// };

// const render = () => {
// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         <button onClick={toggleText}>
//             {app.toggleText ? 'Hide Details' : 'Show details'}
//         </button>
//         {app.toggleText ? <p> {app.subtitle} </p> : ''}
//         {app.toggleText && (
//             <div>
//                 <p> {app.subtitle} </p>
//             </div>
//         )}
//     </div>
// );

// const appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
// };

// render();