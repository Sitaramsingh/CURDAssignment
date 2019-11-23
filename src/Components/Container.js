import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { createAction } from '../actions/createAction';
import { updateAction } from '../actions/updateAction';
import { deleteAction } from '../actions/deleteAction';

import './Container.css';
import ToDoForm from './ToDoForm/ToDoForm';
import ToDoList from './ToDoList/TodoList';




export class ContainerComponent extends Component {
    constructor(props){
      super(props);
      this.state= {
          title:'',
          desc:'',
          disable: true
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.editSubmit = this.editSubmit.bind(this);
      this.deleteToDo = this.deleteToDo.bind(this);

    }
    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value });
      }
    handleSubmit(evt){
      evt.preventDefault();
        const desc =  this.state.desc
        // debugger
        if(desc !== ''){
            this.props.createAction({id: new Date(), desc});
        }
        this.setState({desc: ''});
    }
    editSubmit(id, desc){
        this.props.updateAction({id, desc})
    }
    deleteToDo(id){
      this.props.deleteAction(id)
    }

    render() {
        const todoList = this.props.todoList.createReducer
        const todoListComponent = todoList.map((item,index) => (
            <ToDoList
              key={index}
              listData={item}
              index={index}
              editSubmit={this.editSubmit}   
              deleteToDo={this.deleteToDo}
            />
          ));
      
        return (
          <>
            <h1>To Do Assingnment</h1>
            <Container>
              <div className="todoCont">
                <ToDoForm 
                  onHandleChange={this.handleChange} 
                  onHandleSubmit={this.handleSubmit}
                  value={this.state.desc}
                  buttonName={'Create'}
                />
              </div>
              <div className="todoListCont">
                {todoListComponent}
              </div>
            </Container>
          </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      createAction:createAction,
      updateAction:updateAction,
      deleteAction:deleteAction,
  },dispatch);
}

const mapStateToProps = (state) => {
    return {
      todoList : state
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ContainerComponent)