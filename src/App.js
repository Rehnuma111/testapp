import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Contact from './component/contact';
import Register from './component/register';
import Navbar from './component/navbar';
import Home from './page/home';
import Footer from './component/footer';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar />
          <Footer />
        <Routes>
          <Route element={<Contact />} path="/contact" />
          <Route element={<Register />} path="/register" />
          <Route element={<Home />} path="/home" />

          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
