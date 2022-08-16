import { Pessoa } from "./Pessoa.js";

export class Aluno extends Pessoa {

    public nome: String;
    public idade: number;
    public cidade: String;
    private notas: Array<number>;

    constructor(nome: String, idade: number, cidade: String, notas: Array<number>) {
        super(nome, idade, cidade);
        this.notas = notas;
    }

    public apresentar(): String {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade}.`;
    }

    public calcularMedia(): number {
        return this.notas.reduce((anterior, posterior) => anterior + posterior, 0) / this.notas.length
    }

    public get getNome() : String {
        return this.nome;
    }

    
    public get value() : number {
        return this.idade;
    }
    
    
}
