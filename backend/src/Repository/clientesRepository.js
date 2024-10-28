import con from "./conection.js";


export async function inserirCliente(cliente) {
    const comando = `
        insert into clientes (nome, telefone, endereco, carro, placa, descricao) 
					        values (?, ?, ?, ?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [cliente.nome, cliente.telefone, cliente.endereco, cliente.carro, cliente.placa, cliente.descricao])
    let info = resposta[0];
    
    return info.insertId;
}


export async function consultarCliente(idCliente) {
    const comando = `
        select   
            nome, 
            telefone,
            endereco, 
            carro, 
            placa, 
            descricao
          from clientes
          where id_cliente = ?
    `;

    let resposta = await con.query(comando, [idCliente]);
    let registros = resposta[0];

    return registros;
}


export async function alterarCliente(id, cliente) {
    const comando = `
         update clientes 
                set nome = ?,
                telefone = ?,
                endereco = ?,
                carro = ?,
                placa = ?,
                descricao = ?
            where id_cliente = ?
    `

    let resposta = await con.query(comando, [cliente.nome, cliente.telefone, cliente.endereco, cliente.carro, cliente.placa, cliente.descricao, id])
    let info = resposta[0];

    return info.affectedRows;
}


export async function removerCliente(id) {
    const comando = `
        delete from clientes 
         where id_cliente = ?
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}

