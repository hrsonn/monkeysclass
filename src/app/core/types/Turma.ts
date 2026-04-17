export interface Turma {
    id: number, 
    nome: string,
    turno: Turno,
    anoLetivo: number,
    ativa: boolean
}

enum Turno {
    MANHA,TARDE,NOITE
}