import './adm.scss'
import logo from './pessoa.png'
import empresa from './imgempresa.png'
import PedidoCard from '../../components/pedido';


export default function Administrador({ userName }) { // Recebe o nome do usuário como prop
    return (
        <div className='config'>
            <div className='empresa-container'>
                <img src={empresa} alt="Logo da empresa" className='empresa-logo' />
                <h1 className='txt'>Bem-vindo(a) novamente, {userName}</h1> 
            </div>

            <div className='botoes'> 
                <img src={logo} className='iconepes' alt="logo" />
                <h1 className='titulo'>Configurações</h1>
                
                <button><a href="#pedidos">Pedidos em Andamento</a></button>
                <button><a href='#cliente'>Cadastrar Clientes</a></button>
                <button>Agendamento</button>
                <button>Relatórios</button>
                <div className='log'>
                    <button className='logout'><h1 className='log'><strong>Logout</strong></h1></button>
                </div>
            </div>
            
            <div id='pedidos' className='pedidos'>
                <h1>Pedidos em Aberto</h1>
                <div className="cards">
                   <PedidoCard cliente="Maria" servico="Troca de câmbio" />
                   <PedidoCard cliente="João" servico="Troca de óleo" />
                </div>
            </div>

            <div id='cliente' className='pedidos'>
                <h1>Cadastrar clientes</h1>
                <div className='clientes'>
                 <div className='campos'>
                   <input   className='digit'   type="text" placeholder='Nome'/>
                 </div>
                 <div className='campos'>
                    <input className='digit'   type="text" placeholder='Placa'/>
                  </div>
                  <div className='campos'>
                    <input  className='digit'  type="text" placeholder='Modelo'/>
                   </div>
                   <div className='campos'>
                    <input  className='digit'   type="text" placeholder='Carro'/>
                   </div>
                 <div className='campos'>
                     <input   className='digit'  type="text" placeholder='Telefone'/>
                </div>
                 <div className='campos'>
                      <input className='digit'   type="text" placeholder='Endereço'/>
                 </div>
            </div>
            <div className='desc'>
                <div className='clientela'>
                    <h1>Descrição do cliente</h1>
                    <input className='d'type='text' placeholder='Digite aqui...'/>
                </div>
            </div>
        
                <button className='botao'>Cadastrar</button>
            
      </div>
</div>
    );
}

