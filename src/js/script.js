//DECLARAÇÕES E VARIAVEIS

var nome="fiap";
console.log(nome);

let idade = 19;
console.log(idade)

const sobrenome="Fiapinho";
console.log(sobrenome);

//Declarand uma variavel indefinida
let nome1;
console.log(nome1)

//Declarando uma variavel nula
let nome2=null;
console.log(nome2)

//Tipos de variaveis
let exemplo1 = 10;
console.log(typeof exemplo1)

let exemplo2 = "Tecnologia";
console.log(typeof exemplo2)

let exemplo3 = true
console.log(typeof exemplo3)

let exemplo4 = {};
console.log(typeof exemplo4)

let exemplo5 = [];
console.log(typeof exemplo5)

//Conversões 

let numFloat = 123.456;
console.log(parseInt(numFloat))

let numString = "123.456"
console.log(parseInt(numString))

//Metodos

//length = verifica o tamanho da string
let frase ="O mundo da tecnologia";
console.log(frase.length)

//indexof - retorna um trecho do texto

let texto="A programação indomável e sustentavel";
console.log(texto.indexOf("ção"))

//slice - retorna um trecho do texto com inicio e final
let info = "Processaento de ponta";
console.log(info.slice(2,8))

//Operadores Aritméticos

const num1 = 10;
const num2 = 20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//Operadores lógicos

const num3 = 10;
const num4 = 20;

console.log(num3 < num4);
console.log(num3 > num4 && num4 < num3);
console.log(num3 < num4 || num4 < num3);

//Operadores de Comparação

console.log(num3 == num4)
