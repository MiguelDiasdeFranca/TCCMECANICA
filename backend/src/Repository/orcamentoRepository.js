import con from "./conection.js";


export async function inserirOrcamento( orcamento) {
    const comando = `
        insert into tb_diario (carro, placa, enderco, telefone, descricao, pecas, valor) 
					        values (?, ?, ?, ?, ?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [orcamento.carro, orcamento.placa, orcamento.endereco, orcamento.telefone, orcamento.descricao, orcamento.pecas, orcamento.valor])
    let info = resposta[0];
    
    return info.insertId;
}


export async function consultarOrcamento(idOrcamento) {
    const comando = `
    SELECT 
    o.id_cliente,
    c.nome,
    o.carro,
    o.placa,
    o.enderco,
    o.telefone,
    o.descricao,
    o.pecas,
    o.valor
FROM 
    orcamento o
INNER JOIN 
    clientes c ON o.id_cliente = c.id_cliente;
    `;

    let resposta = await con.query(comando, [idOrcamento]);
    let registros = resposta[0];

    return registros;
}
export async function alterarOrçamento(id, orcamento) {
    const comando = `
         update orcamento 
                set carro = ?, 
                placa = ? ,
                endereco = ?,
                teleone = ?,
                descricao = ?, 
                pecas = ?,
                valor = ?
            where id_orcamento = ?
    `

    let resposta = await con.query(comando, [orcamento.carro, orcamento.placa, orcamento.endereco, orcamento.telefone, orcamento.descricao, orcamento.pecas, orcamento.valor,id])
    let info = resposta[0];

    return info.affectedRows;
}


export async function removerOrcamento(id) {
    const comando = `
        delete from orcamento 
         where id_orcamento = ?
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}

