import React, { useState, useEffect } from 'react';
import './agendamentos.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Veragendamentos() {
    const [token, setToken] = useState(null);
    const [descricao, setDescricao] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [clientes, setClientes] = useState([]);
    const [editandoId, setEditandoId] = useState(null); // Para controlar qual agendamento está sendo editado
    const [novaDescricao, setNovaDescricao] = useState(''); // Para armazenar a nova descrição

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
            const url = `http://localhost:5035/agendamento/?x-access-token=${token}`;
            const resp = await axios.get(url);
            setClientes(resp.data); // Atualizando a lista de clientes com o retorno do servidor
        } catch (error) {
            toast.error('Erro ao buscar clientes!');
            setError('Erro ao buscar clientes!');
        }
    };

    const consultarClientes = async () => {
        setLoading(true);
        try {
            const url = `http://localhost:5035/agendamento/?x-access-token=${token}&descricao=${descricao}`;
            const resp = await axios.get(url);
            setClientes(resp.data);
        } catch (error) {
            toast.error('Erro ao filtrar clientes!');
            setError('Erro ao filtrar clientes!');
        } finally {
            setLoading(false);
        }
    };

    const excluir = async (id_agendamento) => {
        const confirmacao = window.confirm('Tem certeza que deseja excluir o agendamento?');
        if (!confirmacao) return;

        try {
            const url = `http://localhost:5035/agendamento/${id_agendamento}?x-access-token=${token}`;
            await axios.delete(url);

            setClientes((prevClientes) =>
                prevClientes.filter(cliente => cliente.id_agendamento !== id_agendamento)
            );
            toast.success('Agendamento removido com sucesso!');
        } catch (error) {
            toast.error(`Erro ao excluir agendamento: ${error.response ? error.response.data.erro : 'Erro desconhecido'}`);
        }
    };

    const iniciarEdicao = (id_agendamento, descricaoAtual) => {
        setEditandoId(id_agendamento);
        setNovaDescricao(descricaoAtual);
    };

    const salvarDescricao = async () => {
        console.log('Nova Descrição:', novaDescricao); // Verifique se o valor está correto
    
        if (!novaDescricao) {
            toast.error('Descrição não pode estar vazia');
            return;
        }
    
        try {
            const url = `http://localhost:5035/agendamento/${editandoId}?x-access-token=${token}`;
            await axios.put(url, { descricao: novaDescricao });
    
            // Após a atualização, busque novamente os dados para garantir que a lista esteja atualizada
            await buscar();
    
            // Finaliza a edição
            setEditandoId(null);
            setNovaDescricao('');
            toast.success('Descrição alterada com sucesso!');
        } catch (error) {
            toast.error(`Erro ao alterar descrição: ${error.response ? error.response.data.erro : 'Erro desconhecido'}`);
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
            <h1 className="titulo2">Ver Agendamentos</h1>

            <button onClick={consultarClientes} disabled={loading}>
                {loading ? 'Carregando...' : 'Buscar'}
            </button>

            {error && <div className="erro">{error}</div>}

            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.length > 0 ? (
                        clientes.map(item => (
                            <tr key={item.id_cliente}>
                                <td>
                                    {editandoId === item.id_agendamento ? (
                                        <input
                                        type="text"
                                        value={novaDescricao}
                                        onChange={(e) => setNovaDescricao(e.target.value)} 
                                        placeholder="Digite a nova descrição"
                                        />
                                    ) : (
                                        item.descricao
                                    )}
                                </td>
                                <td>
                                    {editandoId === item.id_agendamento ? (
                                        <button onClick={salvarDescricao} >
                                            Salvar
                                        </button>
                                    ) : (
                                        <>
                                            <button onClick={() => iniciarEdicao(item.id_agendamento, item.descricao)} >
                                                Alterar
                                            </button>
                                            <button onClick={() => excluir(item.id_agendamento)} >
                                                Excluir
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">Nenhum agendamento encontrado.</td>
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
