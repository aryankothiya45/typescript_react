import { useTasks } from './TasksContext';
import TodoItem from './TodoItem';

export default function TaskList() {
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