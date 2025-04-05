import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-sigma-gold font-sigma">Barbearia Sigma</h1>
      <p className="mb-6 text-sigma-light text-sm">Seu tempo, seu estilo.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xs">
        <Link
          to="/servicos"
          className="bg-sigma-gold text-sigma-dark p-4 rounded-xl shadow-lg hover:scale-105 transition font-semibold text-sm flex justify-center items-center">
          <span className="mr-2">✂️</span> Serviços
        </Link>
        <Link
          to="/agendar"
          className="bg-sigma-gold text-sigma-dark p-4 rounded-xl shadow-lg hover:scale-105 transition font-semibold text-sm flex justify-center items-center">
          <span className="mr-2">📅</span> Agendar
        </Link>
      </div>
    </div>
  )
}
