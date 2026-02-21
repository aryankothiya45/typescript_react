import type { Reducer } from 'react';

export type Todo = {
    id: number;
    text: string;
    done: boolean;
}

export type TodoAction =
    | { type: 'added'; text: string }
    | { type: 'changed'; id: number; updates: Partial<Todo> }
    | { type: 'deleted'; id: number };



let nextId = 0;

const todoReducer: Reducer<Todo[], TodoAction> = (todos, action) => {
    switch (action.type) {
        case 'added':
            return [...todos, { id: nextId++, text: action.text, done: false }];
        case 'changed' :
            return todos.map((t) => 
                t.id === action.id ? { ...t, ...action.updates } : t
        );
        case 'deleted' :
            return todos.filter((t) => t.id !== action.id);
        default:
            return todos;  
    }
}

export default todoReducer;