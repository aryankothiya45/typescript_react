
import { JSX, useState , useCallback} from "react";
import { useTasksDispatch } from "./TasksContext";

const AddTask = () : JSX.Element => {
    const [text, setText] = useState<string>('');
    const dispatch = useTasksDispatch();

    const handleAdd = useCallback(() : void => {
        if (text.trim() === '') {
            return;
        }
        dispatch({
            type: 'added',
            text: text
        });
        setText('');
    }, [text, dispatch]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) : void => {
        setText(e.target.value);
    }, []);

    return(
        <div>
            <h2>Add Task</h2>
            <input 
                type="text"
                value={text}
                placeholder="Enter task"
                onChange ={handleChange}          
            />
            <button onClick={handleAdd}>
                Add
            </button>
        </div>
    );
}

export default AddTask;