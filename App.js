import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
import DatePicker from 'react-native-datepicker';

function App() {
  return (
    <View>
      <Todo />
    </View>
  );
}

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tasklist:[],
      datelist:[],
      taskinput:'',
      taskdate:''
    }
  }

  deleteTask = (index) => {
    this.setState(state => {
      const Tasks = [...this.state.tasklist];
      Tasks.splice(index, 1);
      return {
        tasklist: Tasks,
      };
    });
  };

  displayDate = date =>{
    this.setState({
      taskdate:date
    });
  }

  displayText = text => {
    console.log(text,"text")
    this.setState({
      taskinput:text
    });
  }

  addTask = () => {
    console.log(this.state.taskinput)
    this.setState(state => ({
      tasklist:[...state.tasklist,state.taskinput],
      taskinput:"",
      datelist:[...state.datelist,state.taskdate]
    }));
  }

  render(){
    const alltasks = this.state.tasklist.map((data, index) => {
            return (
              <View>
                <Text>
                {data}
                </Text>
                 <Text>
                {this.state.datelist[index]}
                </Text>
                <Button onPress={()=>this.deleteTask(index)} title="Delete" />
              </View>
              );
          });
    return(
      <View>
        <Text>Todo List</Text>
        <TextInput placeholder="You task here" value={this.state.taskinput} onChangeText={this.displayText}></TextInput>
        <Text>Select Date</Text>
          <DatePicker
          value={this.state.date}
          onDateChange={this.displayDate}
          type="date"
          />
        <Button onPress={this.addTask} title = "Add task" />
        <ScrollView>{alltasks}</ScrollView>
      </View>
    )
  }
}

export default App;
