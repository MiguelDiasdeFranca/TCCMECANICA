import { autenticar } from '../../utils/jwt.js';

import * as db from '../Repository/orcamentoRepository.js';

import { Router } from "express";
const endpoints = Router();


endpoints.get('/orcamento/', autenticar, async (req, resp) => {
    try {
        let idOrcamento = req.user.id;
        let registros = await db.consultarOrcamento(idOrcamento);
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoints.post('/orcamento/', autenticar, async (req, resp) => {
    try {
        let orcamento = req.body;
        orcamento.idOrcamento = req.user.id;

        console.log(orcamento)

        let id = await db.inserirOrcamento(orcamento);

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


endpoints.put('/orcamento/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let orcamento = req.body;

        let linhasAfetadas = await db.alterarOrçamento(id, orcamento);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum Orçamento encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.delete('/orcamento/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerOrcamento(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum Orçamento encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})






export default endpoints;