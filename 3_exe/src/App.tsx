
import './App.css'
import Accordion from './components/Accordion/Accordion';
import TodoList from './components/TodoReducer/TodoList';
import { TasksProvider } from './components/TodoContext/TasksContext';
import AddTask from './components/TodoContext/AddTask';
import TaskList from './components/TodoContext/TaskList';

export default function App() {
  return (
    <>
      <Accordion />
      <hr />
      <TodoList />
      <hr />
      <TasksProvider>
        <AddTask />
        <TaskList />
      </TasksProvider>

    </>
  );
}

