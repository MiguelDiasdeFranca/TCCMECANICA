import { autenticar } from '../utils/jwt.js';

import * as db from '../repository/diarioRepository.js';

import { Router } from "express";
const endpoints = Router();


endpoints.get('/diario', autenticar, async (req, resp) => {
    try {
        let idUsuario = req.user.id;
        let registros = await db.consultarDiario(idUsuario);
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/diario/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let registros = await db.consultarDiarioPorId(id);
        resp.send(registros[0]);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/diario/', autenticar, async (req, resp) => {
    try {
        let pessoa = req.body;
        pessoa.idUsuario = req.user.id;

        console.log(pessoa)

        let id = await db.inserirDiario(pessoa);

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


endpoints.put('/diario/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let pessoa = req.body;

        let linhasAfetadas = await db.alterarDiario(id, pessoa);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.delete('/diario/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerDiario(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})






export default endpoints;