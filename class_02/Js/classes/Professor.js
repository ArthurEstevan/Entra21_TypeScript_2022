// Professor
export class Professor {
    // métodos
    // construtor
    // apresentar
    // calcularRendimento
    constructor(nome, idade, disciplinas, valorHora, quantidadeHoras) {
        this.nome = nome;
        this.idade = idade;
        this.disciplinas = disciplinas;
        this.valorHora = valorHora;
        this.quantidadeHoras = quantidadeHoras;
    }
    apresentar() {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} anos.
        Lecionei as matérias ${this.disciplinas.join(", ")}.`;
    }
    calcularRendimento() {
        return this.valorHora * this.quantidadeHoras;
    }
}
