// src/components/ServiceForm.jsx
import React, { useState } from 'react'
import { db } from '../firebase'  // Importar a configuração do Firebase
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'

const ServiceForm = ({ service, onClose }) => {
  const [nome, setNome] = useState(service ? service.nome : '')
  const [descricao, setDescricao] = useState(service ? service.descricao : '')
  const [duracao, setDuracao] = useState(service ? service.duracao : '')
  const [preco, setPreco] = useState(service ? service.preco : '')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (service) {
        // Atualiza o serviço no banco de dados
        const serviceRef = doc(db, 'servicos', service.id)
        await updateDoc(serviceRef, {
          nome,
          descricao,
          duracao,
          preco,
        })
      } else {
        // Adiciona um novo serviço
        await addDoc(collection(db, 'servicos'), {
          nome,
          descricao,
          duracao,
          preco,
        })
      }
      onClose()  // Fecha o formulário após o envio
    } catch (err) {
      console.error('Erro ao salvar serviço:', err)
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-sigma-light rounded-lg shadow-lg">
      <h2 className="text-2xl font-sigma mb-6 text-center">{service ? 'Editar Serviço' : 'Adicionar Novo Serviço'}</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm mb-1">Nome do Serviço</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 rounded bg-sigma-dark text-sigma-gold"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full p-2 rounded bg-sigma-dark text-sigma-gold"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Duração</label>
          <input
            type="text"
            value={duracao}
            onChange={(e) => setDuracao(e.target.value)}
            className="w-full p-2 rounded bg-sigma-dark text-sigma-gold"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Preço</label>
          <input
            type="text"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            className="w-full p-2 rounded bg-sigma-dark text-sigma-gold"
            required
          />
        </div>

        <div className="flex justify-between">
          <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancelar
          </button>
          <button type="submit" className="bg-sigma-gold text-sigma-dark px-6 py-2 rounded">
            {service ? 'Atualizar' : 'Adicionar'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ServiceForm
