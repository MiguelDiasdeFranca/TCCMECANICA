import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AlterarCliente() {
  const { id_cliente } = useParams();  // Captura o id_cliente da URL
  const [cliente, setCliente] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('TOKEN'));
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/adm');  // Se não houver token, redireciona para login
    } else {
      buscarCliente(id_cliente);  // Busca o cliente com base no id_cliente
    }
  }, [id_cliente, token, navigate]);

  const buscarCliente = async (id) => {
    try {
      const url = `http://localhost:5035/cliente/${id}?x-access-token=${token}`;
      const response = await axios.get(url);
      setCliente(response.data);
    } catch (error) {
      console.error('Erro ao carregar cliente', error);
      navigate('/consultarclientes');  // Caso ocorra erro, redireciona para a página de consulta
    }
  };

  if (!cliente) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Alterar Cliente {cliente.nome}</h1>
      {/* Formulário para editar os dados do cliente */}
    </div>
  );
}
