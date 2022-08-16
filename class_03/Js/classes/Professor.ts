import { Aluno } from "./Aluno";
import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa {


    public nome: String;
    public idade: number;
    public cidade: String;
    public alunos: Array<Aluno>;

    constructor( nome: String, idade: number, cidade: String, alunos: Array<Aluno>) {
        super(nome, idade, cidade);
        this.alunos = alunos;
    }

    public apresentar(): String {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade}.`
    }

    public gerarBoletins(): Array<number> {

    let boletim:Array<number> = [1,2,3,4]

    return boletim
}

}