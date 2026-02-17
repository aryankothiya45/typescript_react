

let nextId = 0;

export function todoReducer(todos, action) {
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