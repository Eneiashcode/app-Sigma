// src/pages/Login.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const credenciais = {
  usuario: 'admin',
  senha: 'sigma123'
}

export default function Login() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (usuario === credenciais.usuario && senha === credenciais.senha) {
      localStorage.setItem('logado', 'true')
      navigate('/painel')
    } else {
      setErro('Usuário ou senha inválidos')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-2xl font-sigma mb-6">Acesso Restrito</h2>

      <form onSubmit={handleLogin} className="w-full max-w-xs bg-sigma-gold text-sigma-dark p-6 rounded-xl shadow space-y-4">
        <div>
          <label className="block text-sm mb-1">Usuário</label>
          <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)}
            className="w-full p-2 rounded bg-white text-sigma-dark" required />
        </div>

        <div>
          <label className="block text-sm mb-1">Senha</label>
          <input type="password" value={senha} onChange={e => setSenha(e.target.value)}
            className="w-full p-2 rounded bg-white text-sigma-dark" required />
        </div>

        {erro && <p className="text-red-700 text-sm font-semibold">{erro}</p>}

        <button type="submit" className="w-full bg-sigma-dark text-sigma-gold py-2 rounded hover:opacity-90">
          Entrar
        </button>
      </form>
    </div>
  )
}
