import React from 'react'
import { Link, useLocation } from "react-router-dom"

export default function BottomMenu() {
  const { pathname } = useLocation()

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Serviços", path: "/servicos" },
    { label: "Agendar", path: "/agendar" },
    { label: "Painel", path: "/painel" },
  ]

  return (
    <nav className="fixed bottom-0 w-full bg-sigma-dark border-t border-sigma-gold flex justify-around py-2 z-50">
      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`text-sm font-medium ${pathname === item.path ? 'text-sigma-gold' : 'text-sigma-light'} hover:text-white`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
