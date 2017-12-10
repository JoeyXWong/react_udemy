import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleRemoveSelectedState}>
        <h3>Selected Option</h3>
        <h3>{props.selectedOption && <p>{props.selectedOption}</p>}</h3>
        <button onClick={props.handleRemoveSelectedState}>Return</button>
    </Modal>
);

export default OptionModal;