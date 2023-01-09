
import './App.css';
import React, {Component} from 'react';
import List from '../List/List';
import Form from '../Form/Form';
class App extends Component{
  state = {
    list:[
      {id:1, title: 'Item 1',isDone:false},
      {id:2, title: 'Item 2',isDone:true},
      {id:3, title: 'Item 3',isDone:false},
    ],
  };
  
  toggleTodo = (id) =>{
    this.setState({
      list:this.state.list.map((item)=>item.id !==id ? item:{
        ...item,
        isDone:!item.isDone,
      }),
    });
  };
  deleteTodo = (id)=>{
    this.setState({
      list:this.state.list.filter((item)=>item.id !==id,)
    });
  };
 createNewTodo=(todoNew)=>{
   this.setState({
    list:[...this.state.list, {...todoNew, id:Date.now(), isDone:false},
    ],

   })
 }

  render(){
        return (
          <>
     <List list = {this.state.list} 
     onToggle={this.toggleTodo}
      onDelete={this.deleteTodo}
      //addNewListItem={this.addNewListItem}
     />
     <Form onTodoSave = {this.createNewTodo} />
    
   
      </>
      );
  }
}

export default App;

