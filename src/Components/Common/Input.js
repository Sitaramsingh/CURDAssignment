import React from 'react'
import './input.css';

function Input(props) {
    return (
        <div>
            <input className="inputStyle" type="text" name="desc" onChange={props.onHandleChange} placeholder="Description.." />
        </div>
    )
}

export default Input
