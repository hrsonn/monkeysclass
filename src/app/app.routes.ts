import { Routes } from '@angular/router';
import { Navegacao } from './layout/navegacao/navegacao';
import { Dashboard } from './pages/dashboard/dashboard';
import { Turmas } from './pages/turmas/turmas';
import { MinhaConta } from './pages/minha-conta/minha-conta';
import { Ocorrencias } from './pages/ocorrencias/ocorrencias';
import { Usuarios } from './pages/usuarios/usuarios';
import { Alunos } from './pages/alunos/alunos';
import { CadastroAluno } from './pages/cadastro-aluno/cadastro-aluno';
import { CadastroTurma } from './pages/cadastro-turma/cadastro-turma';
import { DadosAlunos } from './pages/dados-alunos/dados-alunos';
import { EditarAluno } from './pages/editar-aluno/editar-aluno';
import { EditarTurma } from './pages/editar-turma/editar-turma';
import { EditarUsuario } from './pages/editar-usuario/editar-usuario';
import { Login } from './pages/login/login';

export const routes: Routes = [
  {
    path: "login",
    component: Login
  },
  {
    path: '',
    component: Navegacao,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'minha-conta', component: MinhaConta },
      { path: 'turmas', component: Turmas },
      { path: 'ocorrencias', component: Ocorrencias },
      { path: 'usuarios', component: Usuarios },
      { path: 'alunos', component: Alunos },
      { path: 'cadastro-alunos', component: CadastroAluno },
      { path: 'cadastro-turma', component: CadastroTurma },
      { path: 'dados-alunos', component: DadosAlunos },
      { path: 'editar-aluno', component: EditarAluno },
      { path: 'editar-turma', component: EditarTurma },
      { path: 'editar-usuario', component: EditarUsuario },
    ],
  },
];