class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : 0,
        };
    }

    componentDidMount(){
        try{
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);

            if(!Number.isNaN(count)){
                this.setState(()=>({count}));
            }

        } catch(e){

        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }

    handleAddOne(e){
        e.preventDefault();
        this.setState((prevState)=>{
            return {
                count : prevState.count + 1
            }
        });
    }

    handleMinusOne(e){
        e.preventDefault();
        this.setState((prevState)=>{
            return {
                count : prevState.count - 1
            }
        });
    }

    handleReset(e){
        e.preventDefault();
        this.setState(()=>{
            return {
                count : 0
            }
        });
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
// const user ={
//     name: 'Joey Wong',
//     age: 19,
//     userLocation: 'New York',
// };

// const getLocation = (location)=>{
//     return (location) ? (<p>Location: {location}</p>) : 'Unknown';
// };



// const userName= 'Joey Wong';
// const age = 14;
// const userLocation = 'New York';

// const addOne = () => {
//     count++;
//     console.log('Add one');
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     console.log('Minus One');
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     console.log('Resetted');
//     renderCounterApp();
// };
// let count = 0;
// const myId = 'my-id1'
// // const templateTwo = (
// //     <div>
// //         <h1>Count: {count}</h1>
// //         <button id={myId} className="button" onClick={addOne}> +1</button>
// //         <button onClick={minusOne}> -1</button>
// //         <button onClick={reset}> reset</button>
// //     </div>
// // );
// // const appRoot = document.getElementById('app');

// // ReactDOM.render(templateTwo, appRoot);

// const renderCounterApp = () => {

//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id={myId} className="button" onClick={addOne}> +1</button>
//             <button onClick={minusOne}> -1</button>
//             <button onClick={reset}> reset</button>
//         </div>
//     );
//     const appRoot = document.getElementById('app');
    
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();