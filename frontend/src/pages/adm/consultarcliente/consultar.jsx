import React, { useState, useEffect } from 'react';
import './consultar.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Consultarcliente() {
    const [token, setToken] = useState(null);
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('TOKEN');
        setToken(token);

        if (!token || token === 'null') {
            navigate('/adm');
        } else {
            buscar();
        }
    }, [navigate]);

    // Função para buscar a lista de clientes
    const buscar = async () => {
        try {
            const url = `http://localhost:5035/cliente/?x-access-token=${token}`;
            const resp = await axios.get(url);
            setClientes(resp.data);
            toast(`${resp.data.length} cliente(s) encontrado(s)!`, { icon: '🔎' });
        } catch (error) {
            toast.error('Erro ao buscar clientes!');
        }
    };

    // Função para excluir cliente
    const excluir = async (id_cliente, nome) => {
        const confirmacao = window.confirm(`Tem certeza que deseja excluir o cliente ${nome}?`);
        if (!confirmacao) return;

        try {
            const url = `http://localhost:5035/cliente/${id_cliente}?x-access-token=${token}`;
            await axios.delete(url);

            setClientes(prevClientes => prevClientes.filter(cliente => cliente.id_cliente !== id_cliente));

            toast.success(`${nome} removido da lista de clientes!`);
        } catch (error) {
            toast.error(`Erro ao excluir cliente: ${error.response ? error.response.data.erro : 'Erro desconhecido'}`);
        }
    };

   
    // Função de consulta
    const consultarClientes = async () => {
        setLoading(true);
        try {
            const url = `http://localhost:5035/clientes/?x-access-token=${token}`;
            const resp = await axios.get(url);
            setClientes(resp.data);
            toast(`${resp.data.length} cliente(s) encontrado(s)!`, { icon: '🔎' });
        } catch (error) {
            toast.error('Erro ao filtrar clientes!');
        } finally {
            setLoading(false);
        }
    };

    // Efeito para fade-in da página
    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        fadeElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="pagina-consultar">
            <h1 className="titulo2">Consultar Clientes</h1>

            <button className="buscarcliente" onClick={consultarClientes} disabled={loading}>
                {loading ? 'Carregando...' : 'Buscar'}
            </button>

            {error && <div className="erro">{error}</div>}

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        <th>Placa</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.length > 0 ? (
                        clientes.map(item => (
                            <tr key={item.id_cliente}>
                                <td>{item.nome}</td>
                                <td>{item.telefone}</td>
                                <td>{item.endereco}</td>
                                <td>{item.placa}</td>
                                <td>{item.descricao}</td>
                                <td>
                                    <button onClick={() => excluir(item.id_cliente, item.nome)}>
                                        Excluir
                                    </button>
                                    <Link to={`/alterarcliente/${item.id_cliente}`}>
                                    <button className='butao'>
                Alterar
                                    </button>
</Link>

                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">Nenhum cliente encontrado.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <Link to="/adm">
                <button className="voltar">
                    <i className="fas fa-arrow-left" style={{ fontSize: '35px', color: 'white' }}></i>
                </button>
            </Link>
        </div>
    );
}
