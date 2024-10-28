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


export async function consultarOrcamento(idUsuario) {
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

    let resposta = await con.query(comando, [idUsuario]);
    let registros = resposta[0];

    return registros;
}
export async function alterarDiario(id, pessoa) {
    const comando = `
         update tb_diario 
                set dt_dia = ?,
                ds_conteudo = ?
            where id_diario = ?
    `

    let resposta = await con.query(comando, [pessoa.dia, pessoa.conteudo, id])
    let info = resposta[0];

    return info.affectedRows;
}


export async function removerDiario(id) {
    const comando = `
        delete from tb_diario 
         where id_diario = ?
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}

