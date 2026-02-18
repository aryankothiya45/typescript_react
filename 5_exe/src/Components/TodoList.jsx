import { useState , useCallback } from 'react'
import TodoItem from './TodoItem'

export default function TodoList() {
    const [todos, setTodos] = useState(
        Array.from({ length: 500 }, (_, i) => ({
            id:i,
            text: `Todo ${i}`,
            completed: false,
        }))
    );

    const [search, setSearch] = useState('');
    const [theme, setTheme] = useState('light');

    // function handleToggle(id) {
    //     setTodos(
    //         todos.map(todo =>
    //             todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //         )
    //     );
    // }

    const handleToggle = useCallback((id) => {
        setTodos((prevTodos) =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }, []);

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

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
                onChange={(e) => setSearch(e.target.value)}
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