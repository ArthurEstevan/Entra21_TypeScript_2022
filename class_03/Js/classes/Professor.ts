import { Aluno } from "./Aluno.js";
import { Pessoa } from "./Pessoa.js";

export class Professor extends Pessoa {


    public nome: String;
    public idade: number;
    public cidade: String;
    public alunos: Array<Aluno>;

    constructor(nome: String, idade: number, cidade: String, alunos: Array<Aluno>) {
        super(nome, idade, cidade);
        this.alunos = alunos;
    }

    public apresentar(): String {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade}.`
    }

    public gerarBoletins(): Array<number> {

        let boletim: Array<number> = []

        this.alunos.forEach(aluno => {
            boletim.push(aluno.calcularMedia());
        });

        return boletim
    }

}