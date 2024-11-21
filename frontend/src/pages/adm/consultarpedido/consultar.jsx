import React, { useState, useEffect } from 'react';
import './consultar.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'; // Certifique-se de que esta biblioteca está instalada

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

    // Efeito para verificar se o token está presente e redirecionar se necessário
    useEffect(() => {
        const token = localStorage.getItem('TOKEN');
        setToken(token);

        if (!token || token === 'null') {
            navigate('/adm');
        } else {
            buscar();
        }
    }, [navigate]);

    // Função para buscar todos os clientes
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

    // Função para filtrar clientes com base nos critérios de busca
    const consultarClientes = async () => {
        setLoading(true);
        try {
            // Construir a URL com os filtros de busca
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

    // Função para excluir um cliente
    const excluir = async (id, nome) => {
        try {
            const url = `http://localhost:5035/pedido/${id}?x-access-token=${token}`;
            await axios.delete(url);
            await buscar();
            toast.success(`${nome} removido da lista de clientes!`);
        } catch (error) {
            toast.error('Erro ao excluir cliente!');
        }
    };

    // Animação de fade-in para os elementos visíveis
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
            {
                threshold: 0.2, // Ajusta o quanto do elemento precisa estar visível para a animação iniciar
            }
        );

        fadeElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();  // Limpa o observer quando o componente for desmontado
    }, []);

    return (
        <div className="pagina-consultar">
            <h1 className='titulo2'>Consultar Cliente</h1>
          
            <button onClick={consultarClientes} disabled={loading}>
                {loading ? 'Carregando...' : 'Buscar'}
            </button>

            {/* Exibe a mensagem de erro, se houver */}
            {error && <div className="erro">{error}</div>}

            {/* Exibe os dados em uma tabela */}
            <table>
                <thead>
                    <tr>
                        <th>Carro</th>
                        <th>Placa</th>
                        <th>Descrição</th>
                        <th>Entregue</th>
                        <th>Preço</th>
                        <th>Pago</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.length > 0 ? (
                        clientes.map(item => (
                            <tr key={item.id}>
                                <td>{item.carro}</td>
                                <td>{item.placa}</td>
                                <td>{item.descricao}</td>
                                <td>{item.entregue ? 'Sim' : 'Não'}</td>
                                <td>{item.preco}</td>
                                <td>{item.pago ? 'Sim' : 'Não'}</td>
                                <td>
                                    <button onClick={() => excluir(item.id, item.carro)}>Excluir</button>
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

            {/* Link para voltar */}
            <Link to="/adm">
                <button className="voltar">
               
  <i className="fas fa-arrow-left" style={{ fontSize: '35px', color: 'white' }}></i> 

                </button>
            </Link>
        </div>
    );
}
