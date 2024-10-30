import agendamentoController from '../backend/src/Controller/agendamentoController.js'
import cadastroController from'././../backend/src/Controller/cadastroController.js'
import clientesController from'././../backend/src/Controller/clientesControlller.js'
import loginController from'././../backend/src/Controller/loginController.js'
import orcamentoController from'././../backend/src/Controller/orcamentoController.js'
import pedidoController from'././../backend/src/Controller/pedidoController.js'

export default function adicionarRotas(servidor) {
    servidor.use(agendamentoController);
    servidor.use(cadastroController);
    servidor.use(clientesController);
    servidor.use(loginController);
    servidor.use(orcamentoController);
    servidor.use(pedidoController);
}
