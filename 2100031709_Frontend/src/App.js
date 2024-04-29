import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Employee from './Pages/Employee';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employee" element={<Employee />} />
      </Routes>
    </div>
  );
}

export default App;
