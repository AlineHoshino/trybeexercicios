import React from 'react';
import { connect } from 'react-redux';
import * as TodoAction from '../action/todoAction';

function Todo (props) {
  let textInput= React.createRef();
  const addTaskonStore = () => {
const value = textInput.current.value
props.addTask(value)
  }
  return (
    <>
    <input ref={ textInput }type="text" placeholder="informe sua nova tarefa"/>
    <button onClick={addTaskonStore}className= "button-add">Adicionar</button>
    </>
  )
}

const mapDispatchToProps =(dispatch) =>({
  addTask:(task) => dispatch(TodoAction.addTask(task))

})

export default connect(null,mapDispatchToProps)(Todo);
