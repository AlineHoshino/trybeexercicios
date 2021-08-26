import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render(){
    const { tasks } = this.props;
  return (
    <div>
      <ul>
        {tasks.map((task, index) =><li key={index}>{task}</li> )}
      </ul>
    </div>
  )
}
}
const mapStateToProps =(state) =>({
  tasks: state.todoReducer.tasks,

})

export default connect(mapStateToProps)(List);
