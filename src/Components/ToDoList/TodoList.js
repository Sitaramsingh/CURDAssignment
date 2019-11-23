import React, { Component } from 'react'

import Button from  '../Common/Button';
import './ToDoList.css';
import ToDoForm from '../ToDoForm/ToDoForm';

export class TodoList extends Component {
    constructor(props){
        super(props);
        this.state ={
            isEdit:false, 
            desc: this.props.listData.desc,
            markFlag: false,
            markName:'unDone',
            variant: 'warning',
            error: false
        }
        this.editToDo = this.editToDo.bind(this);
        this.editToDoListSubmit = this.editToDoListSubmit.bind(this);
        this.deleteToDo = this.deleteToDo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.markTodo = this.markTodo.bind(this);
      }
    
      editToDo(){
        this.setState((prevState,props) => ({
          isEdit : !prevState.isEdit
        }))
      }
      handleChange(evt) {
          this.setState({[evt.target.name]: evt.target.value });
        }
      editToDoListSubmit(){
        const {id} = this.props.listData; 
        const desc =  this.state.desc;
        if(desc !== ''){     
            this.setState((prevState,props) => ({
            isEdit : !prevState.isEdit,
            error : !prevState.error
            }))
            this.props.editSubmit(
              id,
              desc
            );
        } else{
            this.setState((prevState,props) => ({
                error : !prevState.error
            }))
        }
         
      }
      deleteToDo(){
          const {id} = this.props.listData; 
          this.props.deleteToDo(id)
      }
      markTodo(){
          if(this.state.markFlag === false){
            this.setState({
                markFlag: !this.state.markFlag,
                markName: 'done',
                variant: 'success'
            })
          } else {
            this.setState({
                markFlag: !this.state.markFlag,
                markName: 'unDone',
                variant: 'warning'
            })
          }
      }
    render() {
        const { desc } = this.props.listData;
        return (
            this.state.isEdit === true ? (
            <div>
                <ToDoForm         
                    value={this.state.desc}        
                    onHandleChange={this.handleChange} 
                    onHandleSubmit={this.editToDoListSubmit}
                    buttonName={'save'}
                    error = {this.state.error}
                />
            </div>) :
            (
            <div className="btnContainer">
                <tr className={this.state.markFlag === true ? 'todotable1' : 'todotable'} key={this.props.index}>
                        <th>{desc}</th>
                        <td>
                            <Button 
                                btnStyle={this.state.variant} 
                                btnName={this.state.markName}
                                clickEvent={this.markTodo}
                            />
                        </td>
                        <td>
                            <Button 
                                btnStyle={'primary'} 
                                btnName={'edit'}
                                clickEvent={this.editToDo}
                            />
                        </td>
                        <td> 
                            <Button 
                                btnStyle={'danger'} 
                                btnName={'delete'}
                                clickEvent={this.deleteToDo}
                            />
                        </td>
                </tr>
            </div>
            )
        )
    }
}
export default TodoList;
