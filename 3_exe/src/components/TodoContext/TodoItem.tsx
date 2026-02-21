import { useTasksDispatch , type Task} from "./TasksContext";
import { useCallback } from "react";

type TodoItemProps = {
    task: Task;
}

const TodoItem = ({ task }: TodoItemProps) => {
    const dispatch  = useTasksDispatch();
 
    const handleTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'changed',
            id: task.id,
            updates: { text: e.target.value }
        });
    }, [dispatch, task.id]);

    const handleToggle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'changed',
            id: task.id,
            updates: { done: e.target.checked }
        });
    }, [dispatch, task.id]);
    
    const handleDelete = useCallback(() => {
        dispatch({
            type: 'deleted',
            id: task.id,
        });
    }, [dispatch, task.id]);

    return(
        <div>
            <input 
                type="checkbox"
                checked={task.done }
                onChange={handleToggle}
            />
            <input      
                type="text"
                value={task.text }
                onChange={handleTextChange}  
            />
            <button onClick={handleDelete}>
                Delete
            </button>

        </div>
    );
}
export default TodoItem;