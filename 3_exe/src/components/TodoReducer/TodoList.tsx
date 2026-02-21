import { useReducer, useState ,useCallback} from 'react';
import todoReducer , {Todo, TodoAction} from './todoReducer';
import TodoItem from './TodoItem';
import { JSX } from "react/jsx-runtime";

const TodoList = () : JSX.Element => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [text, setText] = useState<string>('');

    const handleAdd = useCallback((): void => {
        const trimmed = text.trim();
        if (!trimmed) return;

        dispatch({ type: 'added', text: trimmed });
        setText('');
    }, [text, dispatch]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        setText(e.target.value);
    }, []);

    return(
        <div>
            <h2>Todo List</h2>
            <input 
                type="text"
                value={text}
                onChange ={handleChange}
                placeholder='Add todo item'
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo: Todo) => (
                    <li key={todo.id}>
                        <TodoItem todo={todo} dispatch={dispatch} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;