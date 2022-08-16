export class Animal {
    // atributos
    private especie: string
    public nome: string
    public peso: number
    public habitat: Array<string>


    // constutor
    constructor(especie: string, nome: string, peso: number, habitat: Array<string>) {

        this.especie = especie;
        this.nome = nome;
        this.peso = peso
        this.habitat = habitat;
    }

    // métodos

    public get getEspecie(): string {
        return this.especie
    }

    public set setEspecie(especie: string) {
        this.especie = especie;
    }

    public comunicar(): string {
        return 
    }

}



