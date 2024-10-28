import con from "./conection.js";


export async function inserirAgendamento(agendamento) {
    const comando = `
        insert into agendamento (data_hora, descricao, id_cliente) 
					        values (?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [agendamento.datahora, agendamento.descricao, agendamento.idCliente])
    let info = resposta[0];
    
    return info.insertId;
}


export async function consultarAgendamento(idAgendamento) {
    const comando = `
    select 
    clientes.nome AS nome_cliente,
    agendamento.descricao,
    agendamento.data_hora
from 
    agendamento
join 
    clientes on agendamento.id_cliente = clientes.id_cliente;
`;

    let resposta = await con.query(comando, [idAgendamento]);
    let registros = resposta[0];

    return registros;
}

export async function alterarAgendamento(id, pessoa) {
    const comando = `
         update agendamento 
                set data_hora = ?,
                descricao = ?
            where id_agendamento = ?
    `

    let resposta = await con.query(comando, [pessoa.datahora, pessoa.descricao, id])
    let info = resposta[0];

    return info.affectedRows;
}


export async function removerAgendamento(id) {
    const comando = `
        delete from agendamento 
         where id_agendamento = ?
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}

