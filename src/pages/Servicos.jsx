// src/pages/Servicos.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const servicos = [
  {
    id: 1,
    nome: 'Corte Masculino',
    duracao: '30min',
    preco: 'R$ 45,00',
    icone: '✂️'
  },
  {
    id: 2,
    nome: 'Barba Completa',
    duracao: '20min',
    preco: 'R$ 30,00',
    icone: '🧔'
  },
  {
    id: 3,
    nome: 'Corte + Barba',
    duracao: '50min',
    preco: 'R$ 70,00',
    icone: '💈'
  },
  {
    id: 4,
    nome: 'Sobrancelha',
    duracao: '10min',
    preco: 'R$ 15,00',
    icone: '👁️'
  }
]

export default function Servicos() {
  return (
    <div className="p-6 max-w-screen-md mx-auto">
      <h2 className="text-2xl font-sigma mb-6 text-center">Serviços Disponíveis</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {servicos.map((servico) => (
          <div key={servico.id} className="bg-sigma-gold text-sigma-dark rounded-xl p-4 shadow-md hover:shadow-lg transition">
            <div className="text-3xl mb-2">{servico.icone}</div>
            <h3 className="text-lg font-bold mb-1">{servico.nome}</h3>
            <p className="text-sm">Duração: {servico.duracao}</p>
            <p className="text-sm">Preço: {servico.preco}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/" className="inline-block bg-sigma-gold text-sigma-dark px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 transition">
          ⬅ Voltar para Home
        </Link>
      </div>
    </div>
  )
}
