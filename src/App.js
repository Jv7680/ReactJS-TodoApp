import logo from './logo.svg';
import './App.scss';
import TodoApp from './views/FullTodoApp/TodoApp/TodoApp';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Todo App</h2>
        <TodoApp />
      </header>

    </div>
  );
}

export default App;
