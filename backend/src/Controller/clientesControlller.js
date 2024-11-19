import { autenticar } from '../../utils/jwt.js';

import * as db from '../Repository/clientesRepository.js';

import { Router } from "express";
const endpoints = Router();


endpoints.get('/clientes/', autenticar, async (req, resp) => {
    try {
        let idCliente = req.user.id;
        let registros = await db.consultarCliente(idCliente);
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

  

endpoints.post('/cliente/', autenticar, async (req, resp) => {
    try {
        let cliente = req.body;
        cliente.idCliente = req.user.id;

        console.log(cliente)

        let id = await db.inserirCliente(cliente);

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


endpoints.put('/cliente/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let cliente = req.body;

        let linhasAfetadas = await db.alterarCliente(id, cliente);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum cliente encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.delete('/cliente/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerCliente(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum cliente encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})






export default endpoints;