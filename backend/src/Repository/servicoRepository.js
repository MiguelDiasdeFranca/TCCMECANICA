import con from "./conection.js";


export async function inserirDiario(pessoa) {
    const comando = `
        insert into tb_diario (dt_dia, ds_conteudo, id_usuario) 
					        values (?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [pessoa.dia, pessoa.conteudo, pessoa.idUsuario])
    let info = resposta[0];
    
    return info.insertId;
}


export async function consultarDiario(idUsuario) {
    const comando = `
        select 
            id_diario    id,
            dt_dia            dia,
            ds_conteudo       conteudo
          from tb_diario
          where id_usuario = ?
    `;

    let resposta = await con.query(comando, [idUsuario]);
    let registros = resposta[0];

    return registros;
}

export async function consultarDiarioPorId(id) {
    const comando = `
        select id_diario    id,
        dt_dia              dia,
        ds_conteudo         conteudo,
        from tb_diario
        where id_diario = ?
    `;

    let resposta = await con.query(comando, [id]);
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

