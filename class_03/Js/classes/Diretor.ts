import { Pessoa } from "./Pessoa.js";
import { Professor } from "./Professor.js";

export class Diretor extends Pessoa {

    public nome: String;
    public idade: number;
    public cidade: String;
    public professor:Array<Professor>;

    constructor(nome: String, idade: number, cidade: String, professor:Array<Professor>,) {
        super(nome, idade, cidade);
        this.professor = professor;
    }

    public apresentar(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade}.`
    }

    public relatorioDesenpenho(): String {
        return ``
    }

}