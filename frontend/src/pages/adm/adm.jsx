import React, { useEffect, useState } from 'react';
import './adm.scss';
import logo from './pessoa.png';
import empresa from './imgempresa.png';
import PedidoCard from '../../components/pedido';
import CheckboxEstilizado from '../../components/checkbox';
import Calendario from '../../components/calendario/calendario';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
    const [nome, setNome] = useState(''); // Nome do cliente (opcional, pode ser retirado se não fizer parte do orçamento)
    const [telefone, setTelefone] = useState(''); // Telefone
    const [endereco, setEndereco] = useState(''); // Endereço
    const [carro, setCarro] = useState(''); // Carro
    const [placa, setPlaca] = useState(''); // Placa
    const [descricao, setDescricao] = useState(''); // Descrição
    const [pecas, setPecas] = useState('');
    const [data, setData] = useState('');
    const [preco, setPreco] = useState(''); // Valor (preço do orçamento)
    const [entregue, setEntregue] = useState(false); // Status de entrega (não está na tabela original, mas pode ser útil)
    const [pago, setPago] = useState(false); // Status de pagamento (não está na tabela original, mas pode ser útil)
    const { id } = useParams(); // ID do orçamento (caso esteja editando)
    const [token, setToken] = useState('');
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
            if (id === undefined) {
                const url = `http://localhost:5035/cliente/?x-access-token=${token}`;
                let resp = await axios.post(url, paramCorpo, {
                    headers: {
                        'x-access-token': token
                    }
                });
                alert('Pessoa adicionada nos arquivos. Id: ' + resp.data.novoId);
            } else {
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


    const formatDate = (dataStr) => {
        const [dia, mes, ano] = dataStr.split('/');
        return `${ano}-${mes}-${dia}`;
      };
      
      const handleDateChange = (e) => {
        const dataFormatada = formatDate(e.target.value); // Convertendo a data para o formato correto
        setData(dataFormatada);
      };

    const Salvarpedido = async () => {
        let paramCorpo = {
            "carro": carro,
            "placa": placa,
            "descricao": descricao,
            "entregue": entregue,
            "preco": preco,
            "pago": pago
        };

        try {
            if (id === undefined) {
                const url = `http://localhost:5035/pedido/?x-access-token=${token}`;
                let resp = await axios.post(url, paramCorpo, {
                    headers: {
                        'x-access-token': token
                    }
                });
                alert('Pessoa adicionada nos arquivos. Id: ' + resp.data.novoId);
            } else {
                const url = `http://localhost:5035/pedido/${id}?x-access-token=${token}`;
                let resp = await axios.put(url, paramCorpo, {
                    headers: {
                        'x-access-token': token
                    }
                });
                alert('Pessoa alterada nos arquivos.');
            }
        } catch (err) {
            alert('Possível informacao repetida ' + err.message);
        }
    };
    const Salvarorcamento = async () => {
        let paramCorpo = {
            "carro": carro,
            "placa": placa,
            "endereco": endereco,
            "telefone": telefone,
            "descricao": descricao,
            "pecas": pecas,
            "valor": preco
        };

        try {
            if (id === undefined) {
                const url = `http://localhost:5035/orcamento/?x-access-token=${token}`;
                let resp = await axios.post(url, paramCorpo, {
                    headers: {
                        'x-access-token': token
                    }
                });
                alert('Pessoa adicionada nos arquivos. Id: ' + resp.data.novoId);
            } else {
                const url = `http://localhost:5035/orcamento/${id}?x-access-token=${token}`;
                let resp = await axios.put(url, paramCorpo, {
                    headers: {
                        'x-access-token': token
                    }
                });
                alert('Pessoa alterada nos arquivos.');
            }
        } catch (err) {
            alert('Erro ao salvar informaçao repetida' + err.message);
        }
    };


    const Salvaragendamento = async () => {
        let paramCorpo = {
            "data": data,
            "descricao": descricao
        }

        try {
            if (id === undefined) {
                const url = `http://localhost:5035/agendamento/?x-access-token=${token}`;
                let resp = await axios.post(url, paramCorpo, {
                    headers: {
                        'x-access-token': token
                    }
                });
                alert('Pessoa adicionada nos arquivos. Id: ' + resp.data.novoId);
            } else {
                const url = `http://localhost:5035/agendamento/${id}?x-access-token=${token}`;
                let resp = await axios.put(url, paramCorpo, {
                    headers: {
                        'x-access-token': token
                    }
                });
                alert('Pessoa alterada nos arquivos.');
            }
        } catch (err) {
            alert('Erro ao salvar informaçao repetida' + err.message);
        }

    }

    return (
        <div className='config'>
            <div className='empresa-container fade-in'>
                <img src={empresa} alt="Logo da empresa" className='empresa-logo' />
                <h1 className='txt'>Bem-vindo(a) novamente, {userName}</h1>
            </div>

            <div className='botoes fade-in'>
                <img src={logo} className='iconepes' alt="logo" />
                <h1 className='titulo'>Configurações</h1>

                <button><a href='#clientescadas'>Cadastrar Clientes</a></button>

                <Link to="/Consultarcliente">
                    <button>Visualizar Clientes</button>
                </Link>

                <button>Orçamento</button>

                <Link to="/consultarorcamento">
                    <button>Visualizar Orçamentos</button>
                </Link>

                <button>
                    <a href="#pedido">Cadastrar pedidos</a>
                </button>

                <Link to="/consultar">
                    <button>Visualizar pedidos</button>
                </Link>

                <button>
                    <a href=" #agendamento2">Agendamento</a>
                </button>
                <Link to="/veragendamentos"><button>
                    Ver Agendamentos
                </button></Link>


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

            <div id='clientescadas' className='pedidos fade-in'>
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

            <div id='pedido' className='cadastrodepedido'>
                <h1>Cadastrar Pedido</h1>

                <div className='campos'>
                    <input
                        className='digit'
                        type="text"
                        placeholder='Carro'
                        name="carro"
                        value={carro}
                        onChange={(e) => setCarro(e.target.value)}
                    />
                </div>
                <div className='campos'>
                    <input
                        className='digit'
                        type="text"
                        placeholder='Placa'
                        name="placa"
                        value={placa}
                        onChange={(e) => setPlaca(e.target.value)}
                    />
                </div>
                <div className='campos'>
                    <input
                        className='digit'
                        type="text"
                        placeholder='Descrição'
                        name="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>
                <div className='campos2'>

                    Entregue:
                    <input
                        className='checkbox'
                        type="checkbox"
                        name="entregue"
                        checked={entregue}
                        onChange={(e) => setEntregue(e.target.checked)}
                    />
                </div>
                <div className='campos2'>
                    <input
                        className='digit'
                        type="text"
                        placeholder='Preço'
                        name="preco"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </div>
                <div className='campos2'>
                    Pago:
                    <input
                        className='checkbox'
                        type="checkbox"
                        name="pago"
                        checked={pago}
                        onChange={(e) => setPago(e.target.checked)}
                    />
                </div>
                <button onClick={Salvarpedido}>Salvar Pedido</button>
            </div>


            <div id='orcamento' className='pedidos fade-in'>
                <h1>Orçamento</h1>
                <div className='clientes'>
                    <div className='campos'>
                        <input className='digit'
                            type="text"
                            placeholder='Carro'
                            value={carro}
                            onChange={e => setCarro(e.target.value)} />
                    </div>
                    <div className='campos'>
                        <input className='digit'
                            type="text"
                            placeholder='Placa'
                            value={placa}
                            onChange={e => setPlaca(e.target.value)} />
                    </div>
                    <div className='campos'>
                        <input className='digit'
                            type="text"
                            placeholder='Endereço'
                            value={endereco}
                            onChange={e => setEndereco(e.target.value)} />
                    </div>
                    <div className='campos'>
                        <input className='digit'
                            type="text"
                            placeholder='Telefone'
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)} />
                    </div>
                    <div className='campos'>
                        <input className='digit' type="text" placeholder='Descrição' value={descricao}
                            onChange={e => setDescricao(e.target.value)} />
                    </div>
                    <div className='campos'>
                        <input className='digit' type="text" placeholder='Peças' value={pecas}
                            onChange={e => setPecas(e.target.value)} />
                    </div>
                    <div className='campos'>
                        <input className='digit' type="text" placeholder='Valor' value={preco}
                            onChange={e => setPreco(e.target.value)} />
                    </div>
                    <button onClick={Salvarorcamento}>Salvar Orçamento</button>
                </div>
            </div>

            <div id='agendamento2' className="Calendariozinho fade-in">
                <Calendario />
                <div className="digitacao">
                    <input className="o3"
                        type="text"
                        name="data"
                        value={data}
                        onChange={(e) => setData(e.target.value)} />
                    <input className="o3"
                        type="text"
                        placeholder='Descricao'
                        name="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)} />
                </div>
                <div>
                    <button className='salvar' onClick={Salvaragendamento}>Salvar</button>
                </div>
            </div>
        </div>
    );
}
