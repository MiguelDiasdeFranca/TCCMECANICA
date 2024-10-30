
import * as db from '../Repository/loginRepository.js';

import axios from 'axios';
import nodemailer from 'nodemailer'
import  {Router} from "express";
import { autenticar, gerarToken } from '../utils/jwt.js';

import { Router } from "express";
const endpoints = Router();

endpoints.post('/entrar/',  async (req,resp) =>{

    try {
        let pessoa= req.body;
        let usuario= await db.validarLogin(pessoa);

        if(usuario==null){
            resp.send({erro: "Usuário e/ou senha incorreto(s)"})

        }else{
            let token = gerarToken(usuario);
            resp.send({
                "token": token
            })
        }

       
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/verificar-email', async (req, res) => {
    const { email } = req.body;
    const apiKey = 'ae09e7fe7b69cd42090c327a40c6604e4fcacf91'; 
    const url = `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${apiKey}`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao verifDicar e-mail:', error);
        res.status(500).json({ error: 'Erro ao verificar e-mail' });
    }
});




endpoints.post('/verificar-email2', async (req, resp) => {
    try {
        const { email } = req.body;

        
        const existe = await db.verificarEmail(email);

        if (existe) {
            const codigo = Math.floor(100000 + Math.random() * 900000); 
            
           

            await enviarEmail(email, codigo);

            let a = await db.cadastrarCodigo(codigo, email);
            
            resp.send({ existe: true, codigo }); 
        } else {
            resp.send({ existe: false });
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});


endpoints.post('/redefinir-senha', async (req, resp) => {
    try {
        const { novaSenha, email, codigo } = req.body;

        const resultado = await db.redefinirSenha(novaSenha, email, codigo);

        if (resultado) {
            resp.send({ success: true, message: 'Senha redefinida com sucesso!' });
        } else {
            resp.status(400).send({ success: false, message: 'Erro ao redefinir a senha. Verifique o e-mail.' });
        }
    } catch (err) {
        console.error('Erro ao redefinir a senha:', err);
        resp.status(500).send({ error: err.message });
    }
});


endpoints.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { nm_usuario } = req.body;

    if (!nm_usuario) {
        return res.status(400).send('O campo  é obrigatório');
    }

    try {
        const resultado = await db.AlterarUsuario(id, { nm_usuario });

        if (resultado > 0) {
            res.status(200).send({ message: 'Nome alterado com sucesso' });
        } else {
            res.status(404).send({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});


async function enviarEmail(email, codigo) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'juliana.xavier.vicente@gmail.com', 
            pass: 'FREI20052426'
        }
    });
    const mailOptions = {
        from: 'juliana.xavier.vicente@acaonsfatima.org.br',
        to: email,
        subject: 'Código de Redefinição de Senha',
        html: `
        <div style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px; border-radius: 5px;">
            <div style="max-width: 600px; margin: auto; background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <h2 style="color: #6A0DAD;">Redefinição de Senha</h2>
                <p style="color: #333;">Olá,</p>
                <p style="color: #333;">Você solicitou a redefinição da sua senha. Use o código abaixo para prosseguir:</p>
                <h3 style="color: #6A0DAD; font-size: 24px;">${codigo}</h3>
                <p style="color: #333;">Se você não solicitou essa mudança, pode ignorar este email.</p>
                <hr style="border: 1px solid #6A0DAD;">
                <footer style="text-align: center; color: #777;">
                    <p>&copy; ${new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
                </footer>
            </div>
        </div>
    `
    };

    await transporter.sendMail(mailOptions);
}
   


export default endpoints