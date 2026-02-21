import { JSX } from 'react/jsx-runtime';
import { useTasks } from './TasksContext';
import TodoItem from './TodoItem';

const TaskList = () : JSX.Element => {
    const tasks = useTasks();
    return(
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <TodoItem task={task} />
                </li>
            ))}
        </ul>
    );
}

export default TaskList;