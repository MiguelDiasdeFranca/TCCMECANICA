import con from "./conection.js";


export async function inserirAdm(pessoa) {
    const comando = `
        insert into cadastroadm (nome, email, senha) 
					        values (?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [pessoa.nome, pessoa.email, pessoa.senha])
    let info = resposta[0];
    
    return info.insertId;
}


export async function consultarAdm(idAdmin) {
    const comando = `
        select 
            id_admin,    
            nome,           
            email,
            senha       
          from cadastroadm
          where id_admin = ?
    `;

    let resposta = await con.query(comando, [idAdmin]);
    let registros = resposta[0];

    return registros;
}

export async function alterarAdm(id, adm) {
    const comando = `
         update cadastroadm
                email = ?,
                senha  = ?
            where id_admin = ?
    `

    let resposta = await con.query(comando, [adm.email, adm.senha, id])
    let info = resposta[0];

    return info.affectedRows;
}


export async function removerAdm(id) {
    const comando = `
        delete from cadastroadm 
         where id_admin = ?
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}

