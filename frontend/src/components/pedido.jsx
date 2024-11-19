import CheckboxEstilizado from './checkbox'; 
import React from 'react';

export default function PedidoCard({ cliente, servico }) {
    return (
        <div className="p">
            <p className="text">Pedido de&nbsp;<strong>{cliente}</strong></p>
            <p className="tex">Descrição: {servico}</p>
            <p className="texto">Já foi pago? <CheckboxEstilizado id={`pagamento-${cliente}`} /></p> 
            <p className="texto">Entregue? <CheckboxEstilizado id={`entregue-${cliente}`} /></p> 
        </div>
    );
}
