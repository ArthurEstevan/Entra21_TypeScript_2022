import { Aluno } from "./classes/aluno.js";
import { Animal } from "./classes/Animal.js";
import { Professor } from "./classes/professor.js";
import { Vendedor } from "./classes/vendedor.js";

console.log("Funcionou");

let animal: Animal = new Animal("drosofila", "mosca", 0.5, ["cidade", "campo"]);
console.log(animal);
console.log(animal.nome);
console.log(animal.habitat[0]);
console.log(animal.peso);
console.log(animal.getEspecie);

animal.nome = "Cachorro"
animal.peso = 10
animal.habitat = ["casa", "cidade", "campo"]
animal.setEspecie = "Canis lupus"

console.log("");


console.log(animal);
console.log(animal.nome);
console.log(animal.habitat[0]);
console.log(animal.peso);
console.log(animal.getEspecie);

console.log("");

let outroAnimal : Animal = new Animal("Borboleta-do-manacá", "borboleta", 0.2, ["cidade", "campo", "casa"])

console.log(outroAnimal);
console.log(outroAnimal.nome);
console.log(outroAnimal.habitat[0]);
console.log(outroAnimal.peso);
console.log(outroAnimal.getEspecie);

console.log("");

outroAnimal.nome = "Tigre"
outroAnimal.peso = 100
outroAnimal.habitat = ["floresta", "siberia", "neve"]
outroAnimal.setEspecie = "Tigre siberiano"

console.log(outroAnimal);
console.log(outroAnimal.nome);
console.log(outroAnimal.habitat[0]);
console.log(outroAnimal.peso);
console.log(outroAnimal.getEspecie);

console.log("");

let aluno : Aluno = new Aluno("Arthur Estevan Vargas", 19, [10, 9, 8]);

console.log(aluno.apresentar());

console.log(aluno.calcularMedia());

console.log("");

let professor : Professor = new Professor("Rubem Oliota", 33, ["Java", "JavaScrip", "TypeScrip"], 80, 12);

console.log(professor.nome);
console.log(professor.idade);
console.log(professor.disciplinas);
console.log(professor.quantidadeHoras);
console.log(professor.valorHora);
console.log(professor.apresentar());
console.log(professor.calcularRendimento());

console.log("");

let vendedor : Vendedor = new Vendedor("Arthur Estevan Vargas", 19, 10, 50);

console.log(vendedor.nome);
console.log(vendedor.idade);
console.log(vendedor.apresentar());
console.log(vendedor.calcularRendimento());