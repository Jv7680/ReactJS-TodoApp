import logo from './logo.svg';
import './App.scss';
import TodoApp from './views/FullTodoApp/TodoApp/TodoApp';
import Nav from './views/FullTodoApp/Nav/Nav';
import About from './views/FullTodoApp/About/About';

import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './views/FullTodoApp/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/todo' exact element={<TodoApp />} />
            <Route path='/about' exact element={<About />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
