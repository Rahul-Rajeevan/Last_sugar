import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/features/Landing/Landing.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/features/Login/Login.jsx';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Landing />} />  
        <Route path="/login" element={<Login />} />  
      </Routes>
    </Router>
    </div>
  );
}

export default App;
