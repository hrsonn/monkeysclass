import { Turma } from "./Turma";

export interface Aluno {
    id: number,
    matricula: string,
    nome: string,
    dataNascimento: string,
    foto: string,
    turma: Turma,
    ativa: boolean
}