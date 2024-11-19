import React, { useEffect, useState } from 'react';
import './adm.scss';
import logo from './pessoa.png';
import empresa from './imgempresa.png';
import PedidoCard from '../../components/pedido';
import CheckboxEstilizado from '../../components/checkbox';
import Calendario from '../../components/calendario/calendario';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Administrador({ userName }) { // Recebe o nome do usuário como prop

    useEffect(() => {
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

        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect(); // Cleanup no unmount
    }, []);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [carro, setCarro] = useState('');
    const [placa, setPlaca] = useState('');
    const [descricao, setDescricao] = useState('');
    const [token, setToken] = useState('');
    const { id } = useParams();  // Pega o ID da URL
    const navigate = useNavigate();

    useEffect(() => {
        const usu = localStorage.getItem('TOKEN');
        setToken(usu);
        if (!usu) {
            navigate('/login2'); 
        }
    }, [navigate]);

    const Salvar = async () => {
        let paramCorpo = {
            "nome": nome,
            "telefone": telefone,
            "endereco": endereco,
            "carro": carro,
            "placa": placa, 
            "descricao": descricao
        };

        try {
            if (id === undefined) { // Se id não for definido, é uma criação
                const url = `http://localhost:5035/cliente/?x-access-token=${token}`;
                let resp = await axios.post(url, paramCorpo, {
                    headers: {
                        'x-access-token': token
                    }
                });
                alert('Pessoa adicionada nos arquivos. Id: ' + resp.data.novoId);
            } else { // Se tiver ID, é uma atualização
                const url = `http://localhost:5035/cliente/${id}?x-access-token=${token}`;
                let resp = await axios.put(url, paramCorpo, {
                    headers: {
                        'x-access-token': token
                    }
                });
                alert('Pessoa alterada nos arquivos.');
            }
        } catch (err) {
            alert('Erro ao salvar, verifique se este email já não está cadastrado. ' + err.message);
        }
    };

    return (
        <div className='config'>
            <div className='empresa-container fade-in'>
                <img src={empresa} alt="Logo da empresa" className='empresa-logo' />
                <h1 className='txt'>Bem-vindo(a) novamente, {userName}</h1> 
            </div>

            <div className='botoes fade-in'> 
                <img src={logo} className='iconepes' alt="logo" />
                <h1 className='titulo'>Configurações</h1>
                
                <button><a href="#pedidos">Visualizar pedidos</a></button>
                <button><a href='#cliente'>Cadastrar Clientes</a></button>
                <button>Orçamento</button>
                <button>Cadastrar pedidos</button>
                <button>Agendamento</button>
                <div className='log'>
                    <button className='logout'><h1 className='log'><strong>Logout</strong></h1></button>
                </div>
            </div>
            
            <div id='pedidos' className='pedidos fade-in'>
                <h1>Pedidos em Aberto</h1>
                <div className="cards">
                   <PedidoCard cliente="Maria" servico="Troca de câmbio" />
                   <PedidoCard cliente="João" servico="Troca de óleo" />
                </div>
            </div>

            <div id='cliente' className='pedidos fade-in'>
                <h1>Cadastrar clientes</h1>
                <div className='clientes'>
                    <div className='campos'>
                        <input className='digit' type="text" placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className='campos'>
                        <input className='digit' type="text" placeholder='Placa' value={placa} onChange={e => setPlaca(e.target.value)} />
                    </div>
                    <div className='campos'>
                        <input className='digit' type="text" placeholder='Carro' value={carro} onChange={e => setCarro(e.target.value)} />
                    </div>
                    <div className='campos'>
                        <input className='digit' type="text" placeholder='Telefone' value={telefone} onChange={e => setTelefone(e.target.value)} />
                    </div>
                    <div className='campos'>
                        <input className='digit' type="text" placeholder='Endereço' value={endereco} onChange={e => setEndereco(e.target.value)} />
                    </div>
                </div>
                <div className='desc'>
                    <div className='clientela'>
                        <h1 className='clientelegal'>Descrição do cliente</h1>
                        <input className='d' type='text' placeholder='Digite aqui...' value={descricao} onChange={e => setDescricao(e.target.value)} />
                    </div>
                </div>
                <button className='botao' onClick={Salvar}>Cadastrar</button>
            </div>

            <div id='orcamento' className='pedidos fade-in'>
                <h1>Orçamento</h1>
                <div className='clientes'>
                    <div className='campos'>
                        <input className='digit' type="text" placeholder='Orçamento'/>
                    </div>
                    <div className='campos'>
                        <input className='digit' type="text" placeholder='Email Cliente'/>
                    </div>
                </div>
            </div>

            <div className="Calendariozinho fade-in">
                <Calendario />
            </div>
        </div>
    );
}
