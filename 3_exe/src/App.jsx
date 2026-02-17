
import './App.css'
import Accordion from './components/Accordion/Accordion';
import TodoList from './components/Todo reducer/TodoList';
import { TasksProvider } from './components/Todo context/TasksContext';
import AddTask from './components/Todo context/AddTask';
import TaskList from './components/Todo context/TaskList';

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

