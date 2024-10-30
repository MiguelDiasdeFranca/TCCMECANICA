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

export async function verificarUsuarioExistente(email, telefone) {
    const comando = `
        select * from login 
        where nm_usuario  = ?
    `;
    let registros = await con.query(comando, [email, telefone]);
    return registros[0]; 
}
export async function verificarEmail(email) {
    const comando = `
        select nm_usuario from login 
        where nm_usuario = ?
    `;
    let registros = await con.query(comando, [email]);
    return registros[0].length > 0;
}
export async function redefinirSenha(novaSenha, email, codigo) {
    const comando = `
        udate cadastroadm 
        set senha  = ? 
        where nm_usuario = ? and codigo = ?
    `;
    
    const resultado = await con.query(comando, [novaSenha, email, codigo]);
    return resultado[0].affectedRows > 0;
}
 
export async function cadastrarCodigo(codigo, email){
    const comando = `
    udate cadastroadm   
    set codigo = ? 
    where nm_usuario = ? 
    `;
    const resultado = await con.query(comando, [codigo , email]);
    return resultado[0].affectedRows > 0;
}