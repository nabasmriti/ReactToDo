import React from 'react';
import "./style.css"
import todosData from './todosdata'
import TodoItem from "./TodoItem"

class App extends React.Component {
    
    /*  const todoItems = todosData.map(function(todosData){
          return   
        
    })*/
    constructor() {
      super()
      this.state = {
        todos: todosData
      }
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
        console.log("Changed" ,id)
        const updatedTodoItems = this.state.todos.map(item => {
          if(item.id === id)
              item.completed = !item.completed
          return item;
        })
       
        this.setState({todos : updatedTodoItems})
        }
    render()  {    
      const todoItems = this.state.todos.map(item => <TodoItem key ={item.id} item ={item} handleChange={this.handleChange}/>)
      return (
        <div className="todo-list">
             {todoItems}
        </div>
      );
   } 
}

export default App;
