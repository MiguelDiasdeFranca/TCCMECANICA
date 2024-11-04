import './confirmacao.scss'
import imgempresa from './imgempresa.png';

export default function Confirmacao(){
    return(
        <div className='confir'>
            <div className='imagem'>
                <img src={imgempresa} alt="" />

               <h1>Insira o código de verificação enviado em seu e-mail</h1> 
            </div>
            <div className='inputs'>
            <input  className='inputa'   type="txto" />
            <input   className='inputa'  type="txto" />
            <input   className='inputa'  type="txto" />
            <input   className='inputa' type="txto"  />
            <input   className='inputa' type="txto"  />
            <input   className='inputa' type="txto"  />
            </div>

        </div>
    )
}