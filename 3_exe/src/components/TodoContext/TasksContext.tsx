import { createContext, useContext, useReducer, type ReactNode ,type Dispatch } from 'react';

export type Task = {
    id: number;
    text: string;
    done: boolean;
}

export type TaskAction= 
    | { type: 'added'; text: string }
    | { type: 'changed'; id: number; updates: Partial<Task> }
    | { type: 'deleted'; id: number };

let nextId = 0;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
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

const TasksContext = createContext<Task[] | null>(null);
const TasksDispatchContext = createContext<Dispatch<TaskAction> | null>(null);

type TasksProviderProps = {
    children: ReactNode;
}

export const TasksProvider = ({ children }: TasksProviderProps) => {
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    return(
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

export const useTasks = (): Task[] => {
  const context = useContext(TasksContext);
  if (context === null) {
    throw new Error("useTasks must be used inside TasksProvider");
  }
  return context;
}

export const useTasksDispatch = () : Dispatch<TaskAction> => {
    const context = useContext(TasksDispatchContext);
    if (context === null) {
        throw new Error("useTasksDispatch must be used inside TasksProvider");
    }
    return context;
}