import React from 'react';
import "./style.css"
import todosData from './todosdata'
import TodoItem from "./TodoItem"

function App() {
    
    /*  const todoItems = todosData.map(function(todosData){
          return   
        
    })*/

    const todoItems = todosData.map(item => <TodoItem key ={item.id} item ={item}/>)


  return (
    <div className="todo-list">
         {todoItems}
    </div>
  );
}

export default App;
