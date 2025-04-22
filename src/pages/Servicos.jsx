import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchServices, deleteService } from '../firebase'; // Verifique a importação correta

const Servicos = () => {
  const [servicos, setServicos] = useState([]);

  // Função para carregar os serviços do Firebase
  const loadServices = async () => {
    const services = await fetchServices(); // Chama a função para pegar os serviços do Firebase
    setServicos(services);
  };

  useEffect(() => {
    loadServices(); // Carrega os serviços ao montar o componente
  }, []);

  // Função para excluir um serviço
  const handleDelete = async (id) => {
    await deleteService(id);
    loadServices(); // Recarrega os serviços após a exclusão
  };

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
            <button
              onClick={() => handleDelete(servico.id)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Excluir
            </button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/" className="inline-block bg-sigma-gold text-sigma-dark px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 transition">
          ⬅ Voltar para Home
        </Link>
      </div>
    </div>
  );
};

export default Servicos;
