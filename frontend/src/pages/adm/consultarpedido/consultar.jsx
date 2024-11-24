import React, { useState, useEffect } from 'react';
import './consultar.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Consultar() {
    const [token, setToken] = useState(null);
    const [clientes, setClientes] = useState([]);
    const [carro, setCarro] = useState('');
    const [placa, setPlaca] = useState('');
    const [descricao, setDescricao] = useState('');
    const [entregue, setEntregue] = useState(false);
    const [preco, setPreco] = useState('');
    const [pago, setPago] = useState(false);
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

    const buscar = async () => {
        try {
            const url = `http://localhost:5035/pedido/?x-access-token=${token}`;
            const resp = await axios.get(url);
            setClientes(resp.data);
            toast(`${resp.data.length} item(s) encontrado(s)!`, { icon: '🔎' });
        } catch (error) {
            toast.error('Erro ao buscar clientes!');
            setError('Erro ao buscar clientes!');
        }
    };

    const consultarClientes = async () => {
        setLoading(true);
        try {
            const url = `http://localhost:5035/pedido/?x-access-token=${token}&carro=${carro}&placa=${placa}&descricao=${descricao}&entregue=${entregue}&preco=${preco}&pago=${pago}`;
            const resp = await axios.get(url);
            setClientes(resp.data);
            toast(`${resp.data.length} item(s) encontrado(s)!`, { icon: '🔎' });
        } catch (error) {
            toast.error('Erro ao filtrar clientes!');
            setError('Erro ao filtrar clientes!');
        } finally {
            setLoading(false);
        }
    };

    const excluir = async (id_pedido, nome) => {
        const confirmacao = window.confirm(`Tem certeza que deseja excluir o pedido do carro ${nome}?`);
        if (!confirmacao) return;

        try {
            const url = `http://localhost:5035/pedido/${id_pedido}?x-access-token=${token}`;
            await axios.delete(url);

            // Atualizando a lista local de clientes sem precisar de uma nova requisição
            setClientes((prevClientes) => prevClientes.filter(cliente => cliente.id_pedido !== id_pedido));
            toast.success(`${nome} removido da lista de pedidos!`);
        } catch (error) {
            toast.error(`Erro ao excluir pedido: ${error.response ? error.response.data.erro : 'Erro desconhecido'}`);
        }
    };

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
            <h1 className="titulo2">Consultar Pedido</h1>

            <button onClick={consultarClientes} disabled={loading}>
                {loading ? 'Carregando...' : 'Buscar'}
            </button>

            {error && <div className="erro">{error}</div>}

            <table>
                <thead>
                    <tr>
                        <th>Carro</th>
                        <th>Placa</th>
                        <th>Descrição</th>
                        <th>Entregue</th>
                        <th>Preço</th>
                        <th>Pago</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.length > 0 ? (
                        clientes.map(item => (
                            <tr key={item.id_pedido}>
                                <td>{item.carro}</td>
                                <td>{item.placa}</td>
                                <td>{item.descricao}</td>
                                <td>{item.entregue ? 'Sim' : 'Não'}</td>
                                <td>{item.preco}</td>
                                <td>{item.pago ? 'Sim' : 'Não'}</td>
                                <td>
                                    <button onClick={() => excluir(item.id_pedido, item.carro)}>
                                        Excluir
                                    </button>
                                    <button>
                                        Alterar
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">Nenhum pedido encontrado.</td>
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
