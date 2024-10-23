import './adm.scss'
import logo from './iconepes.png'
import empresa from './imgempresa.png'



export default function Administrador() {
    return(
<div className='config'>
<div className='botoes'> 
        <img src={logo}  className='iconepes'alt="logo" />
        <h1 className='titulo'>Configurações</h1>
    
        <button>Pedidos em Andamento</button>
        <button>Cadastrar Clientes</button>
        <button>Agendamento</button>
        <button>Relatórios</button>
        <div className='log'>
        <button className='logout'><h1><strong>Logout</strong></h1></button>
    </div>
    </div>

    
    <div className='partepreta'>
    <h1 className='texto'>Bem vindo(a) novamente,nome</h1>

    </div>
 </div> 


    )
}