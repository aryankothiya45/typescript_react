import { useState , useCallback } from 'react'
import TodoItem from './TodoItem'

export type Todo = {
    id: number;
    text: string;
    completed: boolean; 
}

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>(
        Array.from({ length: 200 }, (_, i) => ({
            id:i,
            text: `Todo ${i}`,
            completed: false,
        }))
    );

    const [search, setSearch] = useState<string>('');
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // function handleToggle(id) {
    //     setTodos(
    //         todos.map(todo =>
    //             todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //         )
    //     );
    // }

    const handleToggle = useCallback((id: number) => {
        setTodos((prevTodos) =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }, []);

    const handleChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }, [theme]);

    console.log('rendering TodoList');

    return(
        <div
            style={{
            padding: "20px",
            background: theme === "light" ? "#fff" : "#222",
            color: theme === "light" ? "#000" : "#fff",
            }}>
                
            <h2>performance optimization demo</h2>
            <input
                type="text"
                placeholder='type here'
                value={search}
                onChange={handleChange}
            />

            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
            <div style={{ height: "400px", overflowY: "scroll" }}>
                {todos.map(todo => (
                    <TodoItem key={todo.id} item={todo} onToggle={handleToggle} />
                ))}
            </div>

        </div>
    );
}

export default TodoList;