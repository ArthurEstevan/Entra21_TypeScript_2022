import { Pessoa } from "./Pessoa";
export class Professor extends Pessoa {
    constructor(nome, idade, cidade, alunos) {
        super(nome, idade, cidade);
        this.alunos = alunos;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade}.`;
    }
    gerarBoletins() {
        let boletim = [1, 2, 3, 4];
        return boletim;
    }
}
