// Professor

export class Professor {

    // Atributos

    // nome
    public nome: string

    // idade
    public idade: number

    // disciplina
    public disciplinas: Array<string>

    // valorHora
    public valorHora: number

    // quantidadeHoras
    public quantidadeHoras: number

    // métodos
    // construtor
    // apresentar
    // calcularRendimento

    constructor(nome: string, idade: number, disciplinas: Array<string>, valorHora: number, quantidadeHoras: number) {
        this.nome = nome
        this.idade = idade
        this.disciplinas = disciplinas
        this.valorHora = valorHora
        this.quantidadeHoras = quantidadeHoras
    }

    public apresentar(): string {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} anos.
        Lecionei as matérias ${this.disciplinas.join(", ")}.`
    }

    public calcularRendimento(): number {
        return this.valorHora * this.quantidadeHoras;
    }
}

