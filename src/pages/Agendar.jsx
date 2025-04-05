// src/pages/Agendar.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const servicos = [
  { id: 1, nome: 'Corte Masculino', preco: 45 },
  { id: 2, nome: 'Barba Completa', preco: 30 },
  { id: 3, nome: 'Corte + Barba', preco: 70 },
  { id: 4, nome: 'Sobrancelha', preco: 15 },
]

const horarios = [
  '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30'
]

export default function Agendar() {
  const [selecionados, setSelecionados] = useState([])
  const [data, setData] = useState('')
  const [hora, setHora] = useState('')

  const toggleServico = (id) => {
    setSelecionados(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  const total = selecionados.reduce((acc, id) => {
    const servico = servicos.find(s => s.id === id)
    return acc + (servico?.preco || 0)
  }, 0)

  return (
    <div className="p-6 max-w-screen-sm mx-auto">
      <h2 className="text-2xl font-sigma mb-6 text-center">Agendar Horário</h2>

      <div className="space-y-4 mb-6">
        {servicos.map((s) => (
          <label key={s.id} className="block bg-sigma-gold text-sigma-dark rounded-lg p-3 shadow cursor-pointer">
            <input
              type="checkbox"
              checked={selecionados.includes(s.id)}
              onChange={() => toggleServico(s.id)}
              className="mr-2 accent-sigma-dark"
            />
            {s.nome} - R$ {s.preco},00
          </label>
        ))}
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm">📅 Data:</label>
        <input type="date" value={data} onChange={e => setData(e.target.value)} className="w-full p-2 rounded bg-sigma-light text-sigma-dark" />
      </div>

      <div className="mb-6">
        <label className="block mb-1 text-sm">⏰ Horário:</label>
        <select value={hora} onChange={e => setHora(e.target.value)} className="w-full p-2 rounded bg-sigma-light text-sigma-dark">
          <option value="">Selecione</option>
          {horarios.map(h => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
      </div>

      <div className="text-center mb-4 font-semibold">
        💰 Total: <span className="text-sigma-gold">R$ {total},00</span>
      </div>

      <div className="text-center mb-6">
        <button
          disabled={!data || !hora || selecionados.length === 0}
          className="bg-sigma-gold text-sigma-dark px-6 py-2 rounded-lg shadow hover:scale-105 transition disabled:opacity-50"
        >
          Confirmar Agendamento
        </button>
      </div>

      <div className="text-center">
        <Link to="/" className="text-sm text-sigma-light hover:underline">
          ⬅ Voltar para Home
        </Link>
      </div>
    </div>
  )
}
