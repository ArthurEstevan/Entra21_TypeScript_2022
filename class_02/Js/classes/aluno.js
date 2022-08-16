export class Aluno {
    constructor(nome, idade, nota) {
        this.nome = nome;
        this.idade = idade;
        this.nota = nota;
    }
    apresentar() {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
    calcularMedia() {
        return this.nota.reduce((anterior, posterior) => anterior + posterior, 0) / this.nota.length;
    }
}
