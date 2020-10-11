import React from 'react'; 
import './App.css'; 
import ToDoItem from './ToDoItem.js'; 

class App extends React.Component { 

  constructor(props){
    super(); 


    this.mmOptions = [];
    for (let i = 1; i <= 12; i++) {
       let str = "\"" + i + "\"";
       this.mmOptions.push(<option key={i} value={str}>{i}</option>);
    }

    this.ddOptions = []; 
    for (let i = 1; i <= 31; i++) {
      let str = "\"" + i + "\"";
      this.ddOptions.push(<option key={i} value={str}>{i}</option>);
    }

    this.state = {
      toDoList : [],
      title: null, 
      description: null,
      priority: "normal", 
      dYear: "",
      dMonth: "",
      dDay: ""
    };

    this.handleAddToDo = this.handleAddToDo.bind(this);

  }


  render () { // 描画処理
    const {title,description,priority,dYear,dMonth,dDay} = this.state;

    return (
     <div className="App">
     <hr />
     <form name="submission" onSubmit={this.handleAddToDo}>
     Title: &nbsp;
     <input type="text" name="title" placeholder="title" required /> <br />
     Description:&nbsp;
     <textarea name="description" cols="40" 
        placeholder="description" required onInput={this.handleAddToDo} /><br />
     Priority: &nbsp; 
     <input type="radio" name="priority" value="low"
        checked={this.state.priority === "low"}
        onChange = {this.handleAddToDo} />low
     <input type="radio" name="priority" value="normal"
        checked={this.state.priority === "normal"}
        onChange = {this.handleAddToDo} />normal
     <input type="radio" name="priority" value="high"
        checked={this.state.priority === "high"}
        onChange = {this.handleAddToDo} />high <br />
     Deadline: &nbsp;
     y <select name="dYear" value={dYear} 
        onChange={this.handleAddToDo}>
     <option value="2020">2020</option>
     <option value="2021">2021</option>
     <option value="2022">2022</option>
     </select>
     m <select name="dMonth" value={dMonth} 
        onChange = {this.handleAddToDo}>
     {this.mmOptions}
     </select>
     d <select name="dDay" value={dDay} 
        onChange = {this.handleAddToDo}>
     {this.ddOptions}
     </select><br />
     <button type="submit">ADD</button>
     {/* <button type="cancel">cancel</button> */}
     <hr />
     </form>
     </div>
    );
  }

  handleAddToDo(event){
    const {name,value} = event.target;

    if (name === "title") this.setState({title: value});
    if (name === "description") this.setState({description: value});
    if (name === "priority") this.setState({priority: value});
    if (name === "dYear")    this.setState({dYear: value});
    if (name === "dMonth")   this.setState({dMonth: value});
    if (name === "dDay")     this.setState({dDay: value});

    if (name === "submission") {
      // 内容はあとで
    }
  }

} 

export default App;
