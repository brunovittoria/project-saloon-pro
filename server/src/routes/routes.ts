import { Router, Request, Response } from 'express'
import { CreateUserController }      from '../controllers/user/CreateUserController'
import { AuthUserController }        from '../controllers/user/AuthUserController'
import { DetailUserController } from '../controllers/user/UserDetailController'

const router = Router()


// ---- ROTAS USER ---- //
router.post('/users',   new CreateUserController().handle)  //a lógica para criar usuários está encapsulada no método handle do CreateUserController. Provavelmente, esse método irá extrair os dados da requisição (por exemplo, nome, e-mail, senha), criar um novo usuário e responder de volta ao cliente com os resultados da operação.
router.post('/session', new AuthUserController().handle)    //Com essa rota ira fazer o login
router.get('/me',       new DetailUserController().handle)  //Com essa rota listamos DETALHES do USERS





export { router }