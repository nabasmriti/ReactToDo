import React from 'react'
import './style.css'

    function TodoItem(props){
        return (
            <div className ="todo-item"  checked={props.item.completed}>
                <input type='checkbox'/>
                <p>{props.item.text}</p>
            </div>            
        );
    }

export default TodoItem;