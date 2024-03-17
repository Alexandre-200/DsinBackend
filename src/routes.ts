import { Router } from 'express';

import { CriarUsuarioController } from './controllers/usuario/CriarUsuarioController'
import { LogarUsuarioController } from './controllers/usuario/LogarUsuarioController'
import { ListaUsuarioController } from './controllers/usuario/ListaUsuarioController';
import { ListarUsuariosController } from './controllers/usuario/ListarUsuariosController'

import { CriarServicoController } from './controllers/servico/CriarServicoControlller';
import { ListarServicosController } from './controllers/servico/ListarServicosController';
import { DeletarServicoController } from './controllers/servico/DeletarServicoController';
import { AtualizarServicoController } from './controllers/servico/AtualizarServicoController';
import { AtualizarUsuarioController } from './controllers/usuario/AtualizarUsuarioController';


import { CriarAgendamentoController } from './controllers/agendamento/CriarAgendamentoController';
import { ListarAgendamentosController } from './controllers/agendamento/ListarAgendamentosController';
import { DeletarAgendamentoController } from './controllers/agendamento/DeletarAgendamentoController';
import { AtualizarGendamentoController } from './controllers/agendamento/AtualizarGendamentoController';

import { autenticacao } from './middlewares/autenticacao';
import { TrocarSenhaUsuarioController } from './controllers/usuario/TrocarSenhaUsuarioController';



const router = Router();

router.post('/usuario', new CriarUsuarioController().handle);
router.post('/logar', new LogarUsuarioController().handle);
router.get('/usuario', autenticacao, new ListaUsuarioController().handle);
router.get('/usuarios', autenticacao, new ListarUsuariosController().handle);
router.put('/usuario', autenticacao, new AtualizarUsuarioController().handle);
router.put('/trocarsenhausuario', autenticacao, new TrocarSenhaUsuarioController().handle);

router.post('/servico', autenticacao, new CriarServicoController().handle);
router.get('/servicos', autenticacao, new ListarServicosController().handle);
router.delete('/servico', autenticacao, new DeletarServicoController().handle);
router.put('/servico', autenticacao, new AtualizarServicoController().handle);


router.post('/agendamento', autenticacao, new CriarAgendamentoController().handle);
router.get('/agendamentos', autenticacao, new ListarAgendamentosController().handle);
router.delete('/agendamento', autenticacao, new DeletarAgendamentoController().handle);
router.put('/agendamento', autenticacao, new AtualizarGendamentoController().handle);

export { router };