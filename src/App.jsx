// src/App.jsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import Agendar from './pages/Agendar'
import Login from './pages/Login'
import Painel from './pages/Painel'

function App() {
  const isAuthenticated = localStorage.getItem('logado') === 'true'

  return (
    <div className="min-h-screen bg-sigma-dark text-sigma-gold">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/agendar" element={<Agendar />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/painel"
          element={isAuthenticated ? <Painel /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </div>
  )
}

export default App
