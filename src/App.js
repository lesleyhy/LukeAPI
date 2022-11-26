import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import LukeApi from './components/LukeApi';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LukeApi/>}/>
        <Route path="/:key/:id" element={<LukeApi/>}/>
      </Routes>
    </div>
  );
}

export default App;
