//stateless functional component

class IndecisionApp extends React.Component {

    constructor(props){
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptionSingle = this.handleDeleteOptionSingle.bind(this);
        this.state = {
            options: this.props.options,
        }
    }

    handlePick(){
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNumber]);
    }

    handleAddOption(option){

        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState)=>({
            options: prevState.options.concat(option)
        }));
    }

    handleDeleteOption(){
        this.setState(()=>({
                options : [],
        }));
    }

    handleDeleteOptionSingle(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>option !== optionToRemove)
        }));
    }

    render(){

        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer!';

        return (
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}/>
            <Options options={this.state.options} 
            handleDeleteOption={this.handleDeleteOption}
            handleDeleteOptionSingle={this.handleDeleteOptionSingle}/>
            <AddOptions handleAddOption={this.handleAddOption}/>
        </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: [],
};
        
const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>
        );
}

Header.defaultProps= {
    title: 'Default title',
};

const Action = (props) =>{
        return (
            <div>
                <button onClick={props.handlePick} 
                disabled={!props.hasOptions}>
                What should I do?</button>
            </div>
        );
};

// class Action extends React.Component {

//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handlePick} 
//                 disabled={!this.props.hasOptions}>
//                 What should I do?</button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
        return (
            <div>
                <button onClick={props.handleDeleteOption}>Remove All</button>
                {
                    props.options.map((element)=> 
                    <Option key={element} 
                    optionText={element} 
                    handleDeleteOptionSingle={props.handleDeleteOptionSingle}/>)
                }
            </div>
        );
}

const Option = (props) => {
        return (
            <div>
                {props.optionText}
                <button 
                onClick={(e) => {props.handleDeleteOptionSingle(props.optionText)}}>Remove</button>
            </div>
        );
}

class AddOptions extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state ={
            error: undefined,
        }
    }

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);
        this.setState(()=>({
                error,
        }));
        e.target.elements.option.value = '';
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) =>{
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

// ReactDOM.render(<User name='Joey' age={29}/>, document.getElementById('app'));
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));