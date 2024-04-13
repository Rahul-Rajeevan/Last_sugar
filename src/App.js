import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/features/Landing/Landing.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/features/Login/Login.jsx';
import Layout from './components/features/Sections/Layout.jsx';
import Navbar from './components/common/Navbar/Navbar.jsx';
import lips from "./assets/images/Routes/Lips/lips.png"

function App() {
  return (
    <div className="App">
      
      <Router>
      <section>
      <div id="nav_offer">
      <p style={{color:"white"}}>Use Code: BEAUTY15 - 15% off on our Bestsellers! 😍💸</p>
    </div>
      </section>
      <header>
        <div class="containers">
          <Navbar />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Landing />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/lips" element={<Layout image={lips} products={[1,2,3,4,5,6,7,8,9]}/>} />  
      </Routes>
    </Router>
    </div>
  );
}

export default App;
