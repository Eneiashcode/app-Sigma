import React, { useState, useEffect } from 'react';
import { fetchServices } from '../firebase'; // Certifique-se de que é 'fetchServices' e não 'getServices'

const Agendar = () => {
  const [servicos, setServicos] = useState([]);
  const [selecionados, setSelecionados] = useState([]);
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  // Função para carregar os serviços do Firebase
  const loadServices = async () => {
    const services = await getServices();
    setServicos(services);
  };

  // Chama a função para carregar os serviços assim que a página for carregada
  useEffect(() => {
    loadServices();
  }, []);

  // Função para selecionar ou desmarcar serviços
  const toggleServico = (id) => {
    setSelecionados(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  // Função para calcular o total
  const total = selecionados.reduce((acc, id) => {
    const servico = servicos.find(s => s.id === id);
    return acc + (servico?.preco || 0);
  }, 0);

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
          <option value="09:00">09:00</option>
          <option value="09:30">09:30</option>
          <option value="10:00">10:00</option>
          {/* Adicione os horários necessários */}
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
  );
};

export default Agendar;
