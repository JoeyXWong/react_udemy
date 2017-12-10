import React from 'react';

//Can inline export default for classes
export default class AddOptions extends React.Component {
    
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