import React from 'react';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import AddOptions from './AddOptions';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    
        state = {
            options: [],
            selectedOption: undefined
        }

        handlePick = () => {
            const randomNumber = Math.floor(Math.random() * this.state.options.length);
            this.setState(() => ({
                selectedOption : this.state.options[randomNumber]
            }));
        }
    
        handleAddOption = (option) =>{
    
            if(!option) {
                return 'Enter valid value to add item';
            } else if(this.state.options.indexOf(option) > -1){
                return 'This option already exists';
            }
    
            this.setState((prevState)=>({
                options: prevState.options.concat(option)
            }));
        }
    
        handleDeleteOption = () => {
            this.setState(()=>({
                    options : [],
            }));
        }
    
        handleDeleteOptionSingle = (optionToRemove) => {
            this.setState((prevState)=>({
                options: prevState.options.filter((option)=>option !== optionToRemove)
            }));
        }

        handleRemoveSelectedState = () => {
            this.setState(()=>({
                selectedOption: undefined
            }));
        }
    
        //only class-based components can call the mount methods, stateless functional components can't
        //which is a tradeoff for speed.
        componentDidMount(){
    
            try{
                const json = localStorage.getItem('options');
                const options = JSON.parse(json);
                this.setState(()=> ({ options }));
                console.log('Component did mount');
            } catch(e){
    
            }
      
        }
    
        componentDidUpdate(prevProps, prevState){
            if (prevState.options.length !== this.state.options.length){
                console.log('Component did update');
                const json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    
        //this component is barely used
        componentWillUnmount(){
            console.log('ComponentWillUnmount');
        }
    
    
        render(){
    
            const title = 'Indecision';
            const subtitle = 'Put your life in the hands of a computer!';
    
            return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                <Action hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}/>
                <div className="widget">
                <Options options={this.state.options} 
                handleDeleteOption={this.handleDeleteOption}
                handleDeleteOptionSingle={this.handleDeleteOptionSingle}/>
                <AddOptions handleAddOption={this.handleAddOption}/>
                </div>
                </div>
                <OptionModal 
                selectedOption={this.state.selectedOption}
                handleRemoveSelectedState={this.handleRemoveSelectedState}/>
            </div>
            );
        }
    }
