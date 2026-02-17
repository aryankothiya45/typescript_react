import { useTasksDispatch } from "./TasksContext";

export default function TodoItem({ task }) {
    const dispatch = useTasksDispatch();
 
    function handleTextChange(e) {
        dispatch({
            type: 'changed',
            id: task.id,
            updates: { text: e.target.value }
        });
    }
    function handleToggle(e) {
        dispatch({
            type: 'changed',
            id: task.id,
            updates: { done: e.target.checked }
        });
    }
    function handleDelete() {
        dispatch({
            type: 'deleted',
            id: task.id,
        });
    }

    return(
        <div>
            <input 
                type="checkbox"
                checked={task.done || false}
                onChange={handleToggle}
            />
            <input      
                type="text"
                value={task.text || ''}
                onChange={handleTextChange}  
            />
            <button onClick={handleDelete}>
                Delete
            </button>

        </div>
    );
}