import { autenticar } from '../../utils/jwt.js';

import * as db from '../Repository/agendamentoRepository.js';

import { Router } from "express";
const endpoints = Router();


endpoints.get('/agendamento', autenticar, async (req, resp) => {
    try {
        let idAgendamento = req.user.id;
        let registros = await db.consultarAgendamento(idAgendamento);
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/agendamento/', autenticar, async (req, resp) => {
    try {
        let agendamento = req.body;
        agendamento.idCliente = req.user.id;

        console.log(agendamento)

        let id = await db.inserirAgendamento(agendamento);

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


endpoints.put('/agendamento/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let pessoa = req.body;

        let linhasAfetadas = await db.alterarAgendamento(id, pessoa);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Este agendamento não foi encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.delete('/agendamento/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerAgendamento(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum agendamento encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

  export default endpoints;