import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

export default function ServiceList() {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const querySnapshot = await getDocs(collection(db, "servicos"));
      const servicesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setServicos(servicesList);
    };

    fetchServices();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Serviços Cadastrados</h2>

      <div className="space-y-4">
        {servicos.map((servico) => (
          <div key={servico.id} className="bg-sigma-gold text-sigma-dark p-4 rounded-lg shadow">
            <h3 className="font-bold">{servico.nome}</h3>
            <p>{servico.descricao}</p>
            <p>Duração: {servico.duracao}</p>
            <p>Preço: {servico.preco}</p>
            <p>Categoria: {servico.categoria}</p>
            <div className="mt-2">
              <Link
                to={`/editar-servico/${servico.id}`}
                className="text-sigma-dark hover:text-sigma-gold"
              >
                Editar
              </Link>
              <span className="mx-2">|</span>
              <button className="text-red-600">Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
