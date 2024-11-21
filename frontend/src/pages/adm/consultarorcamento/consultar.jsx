import React, { useState, useEffect } from 'react';
import './consultar.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Consultarorcamento() {
    const [token, setToken] = useState(null);
    const [orcamentos, setOrcamentos] = useState([]);
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

    // Função para buscar a lista de orçamentos
    const buscar = async () => {
        try {
            const url = `http://localhost:5035/orcamento?x-access-token=${token}`;
            const resp = await axios.get(url);
            setOrcamentos(resp.data);
            toast(`${resp.data.length} orçamento(s) encontrado(s)!`, { icon: '🔎' });
        } catch (error) {
            toast.error('Erro ao buscar orçamentos!');
        }
    };

    // Função para excluir orçamento
    const excluir = async (id_orcamento, carro) => {
        const confirmacao = window.confirm(`Tem certeza que deseja excluir o orçamento do carro ${carro}?`);
        if (!confirmacao) return;

        try {
            const url = `http://localhost:5035/orcamento/${id_orcamento}?x-access-token=${token}`;
            await axios.delete(url);

            setOrcamentos(prevOrcamentos => prevOrcamentos.filter(orcamento => orcamento.id_orcamento !== id_orcamento));

            toast.success(`Orçamento do carro ${carro} removido!`);
        } catch (error) {
            toast.error(`Erro ao excluir orçamento: ${error.response ? error.response.data.erro : 'Erro desconhecido'}`);
        }
    };

    // Função de consulta
    const Consultarorcamento = async () => {
        setLoading(true);
        try {
            const url = `http://localhost:5035/orcamento/?x-access-token=${token}`;
            const resp = await axios.get(url);
            setOrcamentos(resp.data);
            toast(`${resp.data.length} orçamento(s) encontrado(s)!`, { icon: '🔎' });
        } catch (error) {
            toast.error('Erro ao filtrar orçamentos!');
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
            <h1 className="titulo2">Consultar Orçamentos</h1>

            <button className="buscarorcamento" onClick={Consultarorcamento} disabled={loading}>
                {loading ? 'Carregando...' : 'Buscar'}
            </button>

            {error && <div className="erro">{error}</div>}

            <table>
                <thead>
                    <tr>
                        <th>Carro</th>
                        <th>Placa</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {orcamentos.length > 0 ? (
                        orcamentos.map(item => (
                            <tr key={item.id_orcamento}>
                                <td>{item.carro}</td>
                                <td>{item.placa}</td>
                                <td>{item.descricao}</td>
                                <td>{item.valor}</td>
                                <td>
                                    <button onClick={() => excluir(item.id_orcamento, item.carro)}>
                                        Excluir
                                    </button>
                                    <Link to={`/alterarorcamento/${item.id_orcamento}`}>
                                        <button className='butao'>
                                            Alterar
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Nenhum orçamento encontrado.</td>
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
