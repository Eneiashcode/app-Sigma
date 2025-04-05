import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import BottomMenu from './components/BottomMenu';

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen bg-sigma-dark text-sigma-gold">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <BottomMenu />
      </div>
    </Router>
  );
}

export default App;
