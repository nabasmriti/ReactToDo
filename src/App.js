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
    }
    render()  {    
      const todoItems = this.state.todos.map(item => <TodoItem key ={item.id} item ={item}/>)
      return (
        <div className="todo-list">
             {todoItems}
        </div>
      );
   } 
}

export default App;
