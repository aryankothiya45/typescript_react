import React from "react";
import { useState } from "react";
import { useTasksDispatch } from "./TasksContext";

export default function AddTask() {
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();

    function handleAdd() {
        if (text.trim() === '') {
            return;
        }
        dispatch({
            type: 'added',
            text: text
        });
        setText('');
    }
    return(
        <div>
            <h2>Add Task</h2>
            <input 
                type="text"
                value={text}
                placeholder="Enter task"
                onChange ={(e) => setText(e.target.value)}          
            />
            <button onClick={handleAdd}>
                Add
            </button>
        </div>
    );
}