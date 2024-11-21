import con from "./conection.js";


export async function inserirAgendamento(agendamento) {
    const comando = `
        insert into agendamento (data_hora, descricao, id_cliente) 
					        values (?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [agendamento.data_hora, agendamento.descricao, agendamento.id_Cliente])
    let info = resposta[0];
    
    return info.insertId;
}


export async function consultarAgendamento(idAgendamento) {
    const comando = `
    select * from agendamento
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

