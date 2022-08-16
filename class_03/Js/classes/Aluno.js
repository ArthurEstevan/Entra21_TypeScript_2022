import { Pessoa } from "./Pessoa";
export class Aluno extends Pessoa {
    constructor(nome, idade, cidade, notas) {
        super(nome, idade, cidade);
        this.notas = notas;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade}.`;
    }
    calcularMedia() {
        return this.notas.reduce((anterior, posterior) => anterior + posterior, 0) / this.notas.length;
    }
    get getNome() {
        return this.nome;
    }
    get value() {
        return this.idade;
    }
}
