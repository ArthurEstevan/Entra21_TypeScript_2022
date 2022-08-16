// Vendedor
export class Vendedor {
    constructor(nome, idade, comissao, vendasRealizada) {
        this.nome = nome;
        this.idade = idade;
        this.comissao = comissao;
        this.vendasRealizada = vendasRealizada;
    }
    // métodos
    // apresentar
    // calcularRendimento
    apresentar() {
        return `Olá, meu nome ${this.nome} e tenho ${this.idade} anos`;
    }
    calcularRendimento() {
        let valor = this.vendasRealizada * (this.comissao / 100);
        return valor;
    }
}
