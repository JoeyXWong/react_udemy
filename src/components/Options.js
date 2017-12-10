import React from 'react';
import Option from './Option';

    const Options = (props) => 
            (
                <div>
                    <button onClick={props.handleDeleteOption}>Remove All</button>
                    {props.options.length === 0 && <p>Please add an option to get started!</p>}
                    {
                        props.options.map((element)=> 
                        <Option key={element} 
                        optionText={element} 
                        handleDeleteOptionSingle={props.handleDeleteOptionSingle}/>)
                    }
                </div>
            );
    

export default Options;