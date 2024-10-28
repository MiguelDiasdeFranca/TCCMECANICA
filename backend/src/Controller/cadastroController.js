import { autenticar } from '../utils/jwt.js';

import * as db from '../Repository/cadastroRepository.js';

import { Router } from "express";
const endpoints = Router();


endpoints.get('/consultar', autenticar, async (req, resp) => {
    try {
        let idAdm = req.user.id;
        let registros = await db.consultarAdm(idAdm);
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
endpoints.post('/inserir/', autenticar, async (req, resp) => {
    try {
        let pessoa = req.body;
        pessoa.idAdm = req.user.id;

        console.log(pessoa)

        let id = await db.inserirAdm(pessoa);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/alterar/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let adm = req.body;

        let linhasAfetadas = await db.alterarAdm(id, adm);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhuma conta encontrada' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.delete('/deletar/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerAdm(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhuma conta cadastrada com essas credenciais' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})






export default endpoints;