import { useCallback } from 'react';
import type { Todo, TodoAction } from './todoReducer';
import { JSX } from "react/jsx-runtime";

type TodoItemProps = {
    todo: Todo;
    dispatch: React.Dispatch<TodoAction>;
}

const TodoItem = ({todo , dispatch }: TodoItemProps): JSX.Element  => {

    const handleTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch({
            type: 'changed',
            id: todo.id,
            updates: { text: e.target.value }
        });
    },[dispatch, todo.id]);

    const handleToggle = useCallback((e: React.ChangeEvent<HTMLInputElement>):void => {
        dispatch({
            type: 'changed',
            id: todo.id,
            updates: { done: e.target.checked }
        });
    },[dispatch, todo.id]);

    const handleDelete = useCallback((): void => {
        dispatch({
            type: 'deleted',
            id: todo.id,
        });
    },[dispatch, todo.id]);

    return(
        <div>
            <input 
                type="checkbox"
                checked={todo.done}
                onChange={handleToggle}
            />
            <input 
                type="text"
                value={todo.text || ''}
                onChange={handleTextChange}  
            /> 
            <button onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
}
export default TodoItem;