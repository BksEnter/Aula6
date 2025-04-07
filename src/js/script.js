//DECLARAÇÕES E VARIAVEIS

var nome="fiap";
console.log(nome);

let idadeint = 19;
console.log(idadeint)

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

const num3 = 30;
const num4 = 40;

console.log(num3 < num4);
console.log(num3 > num4 && num4 < num3);
console.log(num3 < num4 || num4 < num3);

//Operadores de Comparação

console.log(num3 == num4);
console.log(num3 === num4);

// Estrutura Condicional 

let logado = "fiap";

if(logado == "fiap"){
    console.log("É verdadeiro")
}

//if/else
let usuario = "Teste"
if(usuario == "Teste"){
    console.log("Usuário Correto")
}else{
    console.log("Usuário errado")
}

// if encadeado / alinhado 

let idade = 15;

if(idade <= 15){
    console.log("Menor de idade!")
}else if(idade > 15 && idade < 18){
    console.log("Não é maior mas pode entrar!")
}else{
    console.log("Pode entrar, é maior de idade!")
}

// switch

let time = "São Paulo"

switch(time){
    case "Corinthians":
        console.log("Não é o melhor Time")
        break;
    case "São Paulo":
        console.log("Melhor Time")
        break;
    case "Palmeiras":
        console.log("Não tem mundial")
        break;
    default:
        console.log("Nenhuma das opções")
}

// Ternario

let valor = 100

let resultado = valor == 100 ? "Correto" : "Errado"
console.log(resultado)

// Ternario encadeado

let produto = "notebook"
const desconto = true;

const preco = produto == "notebook" ? desconto ? 100 :200 : produto == "mouse" ? 30 :100;
console.log(preco)

// Estrutura da repetição

// For

for(let i=0; i<=10;i++){
    console.log("O valor de I é:" ,i)
}