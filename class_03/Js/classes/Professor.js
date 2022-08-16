import { Pessoa } from "./Pessoa.js";
export class Professor extends Pessoa {
    constructor(nome, idade, cidade, alunos) {
        super(nome, idade, cidade);
        this.alunos = alunos;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade}.`;
    }
    gerarBoletins() {
        let boletim = [];
        this.alunos.forEach(aluno => {
            boletim.push(aluno.calcularMedia());
        });
        return boletim;
    }
}
