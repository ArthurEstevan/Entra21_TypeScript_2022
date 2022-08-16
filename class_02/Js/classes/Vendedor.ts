// Vendedor

export class Vendedor {

    // atributos

    // nome
    // idade
    // comissao
    // vendasRealizadas

    public nome: string
    public idade: number
    public comissao: number
    public vendasRealizada: number

    constructor(
        nome: string,
        idade: number,
        comissao: number,
        vendasRealizada: number,
    ) {
        this.nome = nome
        this.idade = idade
        this.comissao = comissao
        this.vendasRealizada = vendasRealizada
    }

    // métodos
    // apresentar
    // calcularRendimento

    public apresentar(): string {
        return `Olá, meu nome ${this.nome} e tenho ${this.idade} anos`
    }

    public calcularRendimento(): number {
        let valor = this.vendasRealizada * (this.comissao / 100)
        return valor;
    }

}