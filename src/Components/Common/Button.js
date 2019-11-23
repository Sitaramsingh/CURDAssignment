import React from 'react'
import { Button } from 'react-bootstrap';

function button(props) {
    // debugger
    return (
        <div>
            <Button 
                variant={props.btnStyle} 
                type="button" 
                onClick={props.clickEvent}
                >
                    {props.btnName}
                </Button>
        </div>
    )
}

export default button

