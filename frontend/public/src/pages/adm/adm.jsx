import './adm.scss'
import logo from './iconepes.png'



export default function Administrador() {
    return(
<div className='config'>
<img src={logo}  className='iconepes'alt="logo" />
<h1 className='titulo'>Configurações</h1>
<div className='botoes'> 
<button>Pedidos em Andamento</button>
<button>Cadastrar Clientes</button>
<button>Agendamento</button>
<button>Relatórios</button></div>
</div>
    )
}