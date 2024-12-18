import con from "./conection.js";


export async function inserirPedido(pedido) {
    const comando = `
        insert into pedidos (carro, placa, descricao, entregue, preco, pago, id_cliente) 
					        values (?, ?, ?, ?, ?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [pedido.carro, pedido.placa, pedido.descricao, pedido.entregue, pedido.preco, pedido.pago, pedido.idcliente ])
    let info = resposta[0];
    
    return info.insertId;
}


export async function consultarPedido(idPedido) {
    const comando = `
    select * from pedidos
    `;

    let resposta = await con.query(comando, [idPedido]);
    let registros = resposta[0];

    return registros;
}


export async function alterarPedido(id, pedido) {
    const comando = `
         update pedidos 
         carro = ?, 
         placa = ?, 
         descricao = ?, 
         entregue = ?, 
         preco = ?, 
         pago = ?
            where id_pedido = ?
    `

    let resposta = await con.query(comando, [pedido.carro, pedido.placa, pedido.descricao, pedido.entregue, pedido.preco, pedido.pago, id])
    let info = resposta[0];

    return info.affectedRows;
}


export async function removerPedido(id) {
    const comando = `
        delete from pedidos 
         where id_pedido = ?
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}

