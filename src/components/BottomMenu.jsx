import React from 'react';
import { Link } from 'react-router-dom';

export default function BottomMenu() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-sigma-dark p-4 flex justify-around">
      <Link to="/" className="text-sigma-gold">Home</Link>
      <Link to="/servicos" className="text-sigma-gold">Serviços</Link>
      <Link to="/agendar" className="text-sigma-gold">Agendar</Link>
    </div>
  );
}
