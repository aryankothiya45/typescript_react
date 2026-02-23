import './App.css'
import TodoList from './Components/TodoList'
import Example from './generics/1/Response';
import Example2 from './generics/2/FisrtElement';
import Identify from './generics/3/Identify';
import StateManage from './generics/4/StateManage';

const App = () => {

  return (
    <>
      {/* <h1>Todo List</h1>
      <TodoList />   */}
      <Example />
      <hr />
      <Example2 />
      <hr />
      <Identify />
      <hr />
      <StateManage />
    </>
  );
}

export default App
