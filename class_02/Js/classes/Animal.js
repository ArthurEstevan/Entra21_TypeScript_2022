export class Animal {
    // constutor
    constructor(especie, nome, peso, habitat) {
        this.especie = especie;
        this.nome = nome;
        this.peso = peso;
        this.habitat = habitat;
    }
    // métodos
    get getEspecie() {
        return this.especie;
    }
    set setEspecie(especie) {
        this.especie = especie;
    }
    comunicar() {
        return;
    }
}
