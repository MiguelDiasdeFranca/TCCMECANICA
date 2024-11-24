import con from "./conection.js";


export async function inserirAgendamento(agendamento) {
    const comando = `
        INSERT INTO agendamento (descricao) 
        VALUES (?)
    `;
    
    let resposta = await con.query(comando, [agendamento.descricao]);
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

export async function alterarAgendamento(id, descricao) {
    const comando = `
        UPDATE agendamento 
        SET descricao = ? 
        WHERE id_agendamento = ?
    `;


    let resposta = await con.query(comando, [descricao, id]);
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

