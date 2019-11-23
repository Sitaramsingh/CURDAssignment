import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { createAction } from '../../actions/createAction';
import './form.css';
import Button from  '../Common/Button';

export class CreateToDo extends Component {
    
    render() {
        const {onHandleChange, onHandleSubmit, value, buttonName, error} = this.props;
        return (
            <div>
                <div className='formClass'>
                    <form className="btnFlex">
                        <input className={error ? "inputStyle borderStyle1" : "inputStyle borderStyle2"}
                        value={value} 
                        type="text" name="desc" onChange={onHandleChange} placeholder="Add ToDo" />
                        <div className="ml15">
                            <Button 
                                btnStyle={'primary'} 
                                btnName={buttonName}
                                clickEvent={onHandleSubmit}
                            />
                        </div> 
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createAction:createAction,
    },dispatch);
  }

export default connect(null, mapDispatchToProps)(CreateToDo)
