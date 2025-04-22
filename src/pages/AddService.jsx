import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addService } from '../firebase'; // Importa a função que adiciona o serviço

const AddService = () => {
  const [nome, setNome] = useState('');
  const [duracao, setDuracao] = useState('');
  const [preco, setPreco] = useState('');
  const [icone, setIcone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const service = {
      nome,
      duracao,
      preco,
      icone
    };

    try {
      await addService(service); // Chama a função para adicionar o serviço ao Firebase
      navigate('/servicos'); // Redireciona para a página de serviços
    } catch (error) {
      console.error("Erro ao adicionar o serviço:", error);
    }
  };

  return (
    <div className="p-6 max-w-screen-md mx-auto">
      <h2 className="text-2xl font-sigma mb-6 text-center">Adicionar Novo Serviço</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 rounded bg-sigma-light text-sigma-dark"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Duração</label>
          <input
            type="text"
            value={duracao}
            onChange={(e) => setDuracao(e.target.value)}
            className="w-full p-2 rounded bg-sigma-light text-sigma-dark"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Preço</label>
          <input
            type="text"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            className="w-full p-2 rounded bg-sigma-light text-sigma-dark"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Ícone</label>
          <input
            type="text"
            value={icone}
            onChange={(e) => setIcone(e.target.value)}
            className="w-full p-2 rounded bg-sigma-light text-sigma-dark"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sigma-dark text-sigma-gold py-2 rounded hover:opacity-90"
        >
          Adicionar Serviço
        </button>
      </form>
    </div>
  );
};

export default AddService;
