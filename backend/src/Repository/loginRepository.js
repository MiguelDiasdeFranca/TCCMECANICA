import con from "../Repository/conection.js"



export async function validarLogin(pessoa){

    const comando = `
        select 
        nome
        from loginadm
        where 
        nome =?
        and senha=?

    `;

    let registros = await con.query(comando, [pessoa.nome , pessoa.senha])
  
    return registros[0][0]

}



export async function verificarLoginExistente(email, telefone) {
    const comando = `
        select * from loginadm 
        where nome = ?
    `;
    let registros = await con.query(comando, [email, telefone]);
    return registros[0]; 
}

export async function verificarEmail(email) {
    const comando = `
        select nome from loginadm 
        where nome = ?
    `;
    let registros = await con.query(comando, [email]);
    return registros[0].length > 0;
}

export async function redefinirSenha(novaSenha, email, codigo) {
    const comando = `
        update loginadm 
        set senha = ? 
        where nome = ? and codigo = ?
    `;
    
    const resultado = await con.query(comando, [novaSenha, email, codigo]);
    return resultado[0].affectedRows > 0;
}
 
export async function cadastrarCodigo(codigo, email){
    const comando = `
    update loginadm  
    set codigo = ? 
    where nome = ? 
    `;
    const resultado = await con.query(comando, [codigo , email]);
    return resultado[0].affectedRows > 0;

}