import { useReducer, useState} from 'react';
import React from 'react';
import { todoReducer } from './todoReducer';
import TodoItem from './TodoItem';

export default function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [text, setText] = useState('');

    function handleAdd() {
        if (text.trim() !== '') {
            dispatch({ type: 'added', text });
            setText('');
        }
    }

    return(
        <div>
            <h2>Todo List</h2>
            <input 
                type="text"
                value={text}
                onChange ={(e) => setText(e.target.value)}
                placeholder='Add todo item'
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem todo={todo} dispatch={dispatch} />
                    </li>
                ))}
            </ul>
        </div>
    );
}