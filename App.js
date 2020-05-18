import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}


class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tasklist:[],
      text:"",
      date:""
    }
    this.addTask=this.addTask.bind(this);
    this.deleteTask=this.deleteTask.bind(this);
    this.displayText=this.displayText.bind(this);
    this.displayDate=this.displayDate.bind(this);
    this.findIndex=this.findIndex.bind(this);
  }

  componentDidMount() {

    const tasks = localStorage.getItem("tasks");
    // alert(tasks)
    var jsondata=JSON.parse(tasks);
    if (tasks !== null) {
        this.setState({
            tasklist : jsondata
        })
    }

    window.addEventListener("beforeunload", () => {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasklist));
    })
}

  findIndex(id,arr){
    for(let i=0;i<arr.length;i++){
      if (arr[i].name === id){
        return (i)
      }
    }
    return (-1);
  }

  deleteTask(event){
    var newlist=[...this.state.tasklist];
    var id=event.target.id;
    // alert(id);
    var index = this.findIndex(id,newlist) //newlist.indexOf(id)
    console.log(index,"index");
    newlist.splice(index,1)
    this.setState({
      tasklist:[...newlist]
    })
  }

  displayDate(event){
    var value = event.target.value;
    this.setState({
      date:value
    });
    // alert(this.state.date);
  }

  displayText(event){
    var value = event.target.value;
    this.setState({
      text:value
    });
  }

  addTask(){
    var key=this.state.text
    if (key.length === 0){
      alert("cannot leave task field empty");
      return;
    }
    var val=this.state.date
    if (val.length === 0){
      alert("cannot leave due date field empty");
      return;
    }
    var dict={}
    dict["name"]=key;
    dict["date"]=val;
    // console.log(dict);
    this.setState({
      tasklist:[...this.state.tasklist,dict] //,this.state.text
    });
    // console.log(this.state.tasklist);
  }

  render(){
    return(
      <div>
        <h1>Todo List</h1>
        <input placeholder="You task here" onChange={this.displayText}></input><br></br>
        <input type="date" onChange={this.displayDate}></input>
        <button onClick={this.addTask}>Add task</button>
        <div>
          {this.state.text}
          {this.state.date}
        </div>
        <ul>
          {this.state.tasklist.map((value, index) => {
            // console.log(value["name"])
            return (<div id= {value["name"]}>
              <Checkbox value={"Name:"+value["name"]+",DueDate:"+value["date"]} index={index} />
              <button onClick={this.deleteTask} id={value["name"]}>Delete</button>
              </div>);
          })}
      </ul>

      </div>
    )
  }
}

class Checkbox extends React.Component{
  constructor(props){
    super(props);
    this.state={
      checked:true,
      count:0
    }
    this.check=this.check.bind(this);
  }

  check(){
    this.setState({
      count:this.state.count+1
    })
  }

  render(){
    if ((this.state.count)%2 === 0){
      return(
        <div>
          <input type="checkbox" id= {this.props.value} onClick={this.check} ></input>
          <label style={{color:"black"}} id={this.props.value}>{this.props.value} </label>
        </div>
      )
    }
    else{
      return(
        <div>
          <input type="checkbox" id= {this.props.value} onClick={this.check} ></input>
          <label key={this.props.index} style={{color:"red"}} id={this.props.value}>{this.props.value} </label>
        </div>
      )
    }
  }
}

export default App;
