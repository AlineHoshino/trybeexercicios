import { connect } from 'react-redux'
function Title (props) {
  return (
    <>
    <h1>Todo</h1>
    <h3>Possui {props.counter}tarefas</h3>
    </>
  )
}

const mapStateToProps =(state) =>({
  counter: state.todoReducer.counterTask,

})

export default connect(mapStateToProps)(Title);