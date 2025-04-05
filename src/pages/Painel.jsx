// src/pages/Painel.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Painel() {
  return (
    <div className="p-6 max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-sigma mb-6 text-center">Painel Sigma</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-sigma-gold text-sigma-dark rounded-xl p-4 shadow">
          <div className="text-sm mb-1">📅 Agendamentos Hoje</div>
          <div className="text-2xl font-bold">5</div>
        </div>
        <div className="bg-sigma-gold text-sigma-dark rounded-xl p-4 shadow">
          <div className="text-sm mb-1">✂️ Serviços Ativos</div>
          <div className="text-2xl font-bold">4</div>
        </div>
        <div className="bg-sigma-gold text-sigma-dark rounded-xl p-4 shadow">
          <div className="text-sm mb-1">💰 Faturamento do Mês</div>
          <div className="text-2xl font-bold">R$ 1.200</div>
        </div>
        <div className="bg-sigma-gold text-sigma-dark rounded-xl p-4 shadow">
          <div className="text-sm mb-1">📈 Serviço Mais Vendido</div>
          <div className="text-lg font-bold">Corte + Barba</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/servicos" className="block bg-sigma-dark text-sigma-gold border border-sigma-gold p-4 rounded-xl text-center hover:bg-sigma-gold hover:text-sigma-dark transition">
          Gerenciar Serviços
        </Link>
        <Link to="/agendar" className="block bg-sigma-dark text-sigma-gold border border-sigma-gold p-4 rounded-xl text-center hover:bg-sigma-gold hover:text-sigma-dark transition">
          Ver Agendamentos
        </Link>
        <button className="block bg-sigma-dark text-sigma-gold border border-sigma-gold p-4 rounded-xl text-center hover:bg-sigma-gold hover:text-sigma-dark transition">
          Criar Promoções (em breve)
        </button>
        <button className="block bg-sigma-dark text-sigma-gold border border-sigma-gold p-4 rounded-xl text-center hover:bg-sigma-gold hover:text-sigma-dark transition">
          Configurações do Sistema
        </button>
      </div>
    </div>
  )
}
