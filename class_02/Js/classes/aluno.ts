export class Aluno {

    public nome: string
    public idade: number
    public nota: Array<number>


    constructor(nome: string, idade: number, nota: Array<number>) {
        this.nome = nome
        this.idade = idade
        this.nota = nota
    }

    public apresentar(): string {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} anos`
    }

    public calcularMedia(): number {

        return this.nota.reduce((anterior, posterior) => anterior + posterior, 0) / this.nota.length
    }

}