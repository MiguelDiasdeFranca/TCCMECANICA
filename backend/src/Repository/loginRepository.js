import con from "./conection.js";


export async function inserirLogin(pessoa) {
    const comando = `
        insert into login (nm_usuario, senha) 
					        values (?, ?)
    `;
    
    let resposta = await con.query(comando, [pessoa.nmusuario, pessoa.senha])
    let info = resposta[0];
    
    return info.insertId;
}


export async function consultarLogin(idAdm) {
    const comando = `
        select 
        nm_usuario, 
        senha
          from login
          where id_admin = ?
    `;

    let resposta = await con.query(comando, [idAdm]);
    let registros = resposta[0];

    return registros;
}


export async function alterarSenha(pessoa) {
    const comando = `
         update login 
                set senha = ?
                where nm_usuario = ?
    `

    let resposta = await con.query(comando, [pessoa.senha])
    let info = resposta[0];

    return info.affectedRows;
}

export async function alterarNome(pessoa) {
    const comando = `
         update login 
                set nm_usuario = ?
                where senha = ?
    `

    let resposta = await con.query(comando, [pessoa.nmusuario])
    let info = resposta[0];

    return info.affectedRows;
}

