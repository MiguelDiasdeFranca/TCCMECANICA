import con from "./conection.js";


export async function inserirOrcamento( orcamento) {
    const comando = `
        insert into orcamento (carro, placa, enderco, telefone, descricao, pecas, valor) 
					        values (?, ?, ?, ?, ?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [orcamento.carro, orcamento.placa, orcamento.endereco, orcamento.telefone, orcamento.descricao, orcamento.pecas, orcamento.valor])
    let info = resposta[0];
    
    return info.insertId;
}


export async function consultarOrcamento(idOrcamento) {
    const comando = `
   select * from orcamento
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

