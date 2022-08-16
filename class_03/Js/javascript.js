import { Aluno } from "./classes/Aluno";
import { Professor } from "./classes/Professor";
import { Diretor } from "./classes/Diretor";
let aluno = new Aluno("Arthur Estevan Vargas", 19, "São João Batista", [10, 10, 10]);
let professor = new Professor("Rubem Oliota", 33, "Blumenau", [aluno]);
let diretor = new Diretor("Sebastião Rosa", 45, "Blumenau", [professor]);
console.log(aluno.apresentar);
console.log(professor.apresentar);
console.log(diretor.apresentar);
