import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const isAuthenticated = localStorage.getItem("logado") === "true"  // Verifica se o usuário está logado

  const handlePanelClick = () => {
    if (isAuthenticated) {
      navigate("/painel")  // Se estiver logado, vai para o painel
    } else {
      navigate("/login")  // Se não estiver logado, redireciona para a página de login
    }
  }

  return (
    <header className="bg-sigma-dark text-sigma-gold border-b border-sigma-gold shadow-sm relative z-50">
      <div className="flex items-center justify-between px-4 py-3 max-w-screen-lg mx-auto">
        <span className="text-lg font-sigma font-bold">Barbearia Sigma</span>
        <button onClick={() => setOpen(!open)} className="p-1 lg:hidden">
          <Menu size={22} strokeWidth={1.5} />
        </button>
      </div>

      {/* Menu Responsivo */}
      {open && (
        <nav className="absolute top-full right-4 mt-2 bg-sigma-dark border border-sigma-gold rounded-lg w-48 py-2 px-4 text-sm shadow-lg space-y-2 lg:space-y-0 lg:block lg:w-auto lg:static lg:bg-transparent lg:border-0 lg:text-sigma-gold lg:space-x-4">
          <Link to="/" onClick={() => setOpen(false)} className="block lg:inline-block hover:text-white">
            🏠 Home
          </Link>
          <Link to="/servicos" onClick={() => setOpen(false)} className="block lg:inline-block hover:text-white">
            ✂️ Serviços
          </Link>
          <Link to="/agendar" onClick={() => setOpen(false)} className="block lg:inline-block hover:text-white">
            📅 Agendar
          </Link>
          <span
            onClick={() => {
              handlePanelClick()  // Agora chama a função para verificar o login e redirecionar
              setOpen(false)
            }}
            className="block lg:inline-block hover:text-white cursor-pointer"
          >
            📊 Painel (Login necessário)
          </span>
          <Link to="/sobre" onClick={() => setOpen(false)} className="block lg:inline-block hover:text-white">
            ℹ️ Sobre
          </Link>
        </nav>
      )}
    </header>
  )
}
