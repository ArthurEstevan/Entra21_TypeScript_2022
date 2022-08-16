import { Pessoa } from "./Pessoa";
export class Diretor extends Pessoa {
    constructor(nome, idade, cidade, professor) {
        super(nome, idade, cidade);
        this.professor = professor;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade}.`;
    }
    relatorioDesenpenho() {
        return ``;
    }
}
