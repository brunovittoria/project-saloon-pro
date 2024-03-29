import { Router, Request, Response }    from 'express'
import { CreateUserController }         from '../controllers/user/CreateUserController'
import { AuthUserController }           from '../controllers/user/AuthUserController'
import { DetailUserController }         from '../controllers/user/DetailUserController'
import { UpdateUserController }         from '../controllers/user/UpdateUserController'

import { CreateWorksController }        from '../controllers/works/CreateWorksController'

import { isAuthenticated }              from '../middlewares/isAuthenticated'
import { ListWorksController }          from '../controllers/works/ListWorksController'
import { UpdateWorksController }        from '../controllers/works/UpdateWorksController'
import { CheckSubsController }          from '../controllers/works/CheckSubsController'
import { CountWorksController }         from '../controllers/works/CountWorksController'
import { DetailWorkController }         from '../controllers/works/DetailWorkController'
import { NewScheduleController }        from '../controllers/schedule/NewScheduleController'
import { ListScheduleController }       from '../controllers/schedule/ListScheduleController'
import { FinishScheduleController }     from '../controllers/schedule/FinishScheduleController'

const router = Router()


// ---- ROTAS USER ---- //
router.post('/users',   new CreateUserController().handle)                          //a lógica para criar usuários está encapsulada no método handle do CreateUserController. Provavelmente, esse método irá extrair os dados da requisição (por exemplo, nome, e-mail, senha), criar um novo usuário e responder de volta ao cliente com os resultados da operação.
router.post('/session', new AuthUserController().handle)                            //Com essa rota ira fazer o login
router.get('/me', isAuthenticated, new DetailUserController().handle)               //Com essa rota listamos DETALHES do USERS
router.put('/users', isAuthenticated, new UpdateUserController().handle)            //Rota para editar nossas info de USERS

// ---- ROTAS SERVICOS ---- //
router.post('/service', isAuthenticated, new CreateWorksController().handle)        //Rota para criar serviços
router.get('/services', isAuthenticated, new ListWorksController().handle)          //Rota para Lista serviços
router.put('/service', isAuthenticated, new UpdateWorksController().handle)         //Rota para lidar com a modificaçao dos serviços
router.get('/service/check', isAuthenticated, new CheckSubsController().handle)     //Rota onde faz a checagem da assinatura
router.get('/service/count', isAuthenticated, new CountWorksController().handle)    //Rota onde contamos qtd. de serviços
router.get('/service/detail', isAuthenticated, new DetailWorkController().handle)   //Rota para detalhe de um serviço em especifico

// ---- ROTAS SCHEDULE SERVICOS ---- //
router.post('/schedule', isAuthenticated, new NewScheduleController().handle)       //Rota para cadastrar novo agendamento
router.get('/schedule', isAuthenticated, new ListScheduleController().handle)       //Rota para listar todos os agendamentos
router.delete('/schedule', isAuthenticated, new FinishScheduleController().handle)  //Rota para deletar o serviço uma vez que for finalizado

export { router }