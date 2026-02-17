import React, { createContext, useContext, useReducer } from 'react';

let nextId = 0;

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': 
            return [...tasks, { id: nextId++, text: action.text, done: false }];
        case 'changed' :
            return tasks.map((t) => 
                t.id === action.id ? { ...t, ...action.updates } : t
        );
        case 'deleted' :
            return tasks.filter((t) => t.id !== action.id);
        default:
            return tasks;
    }
}

export function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    return(
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

export function useTasks() {
  const context = useContext(TasksContext);
  if (context === null) {
    throw new Error("useTasks must be used inside TasksProvider");
  }
  return context;
}

export function useTasksDispatch() {
    const context = useContext(TasksDispatchContext);
    return context;
}