import agendamentoController from './controller/agendamentoController.js'
import cadastroController from './controller/cadastroController.js'
import clientesController from './controller/clientesController.js'
import loginController from './controller/loginController.js'
import orcamentoController from './controller/orcamentoController.js'
import servicoController from './controller/servicoController.js'

export default function adicionarRotas(servidor) {
    servidor.use(agendamentoController);
    servidor.use(cadastroController);
    servidor.use(clientesController);
    servidor.use(loginController);
    servidor.use(orcamentoController);
    servidor.use(servicoController);
}
