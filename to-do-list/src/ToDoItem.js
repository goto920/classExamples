import React from 'react'; 

class ToDoItem extends React.Component { 
  // static id = 0;

  constructor(props){
    super(); 
  //  this.state ={id: -1};
  }

  componentDidMount(){
    // this.setState({id: ToDoItem.id++});
  }

  render () { // 描画処理
    const {title,description,priority,state,
       creation,modification,deadline} = this.props;

    return (
     <div>
     Title: {title} <br />
     Description: {description} <br />
     Priority: {priority} <br />
     State: {state} <br />
     Creation: {creation} <br />
     Modification: {modification} <br />
     Deadline: {deadline} <br />
     <button name="done">done</button>
     <button name="edit">edit</button>
     <button name="delete">delete</button>
     </div>
    );
  }

} 

export default ToDoItem; 
