/*
// declarar variável:
var nome;
var idade;

//inicializar variável:
var aula = "aula 2";

//atribuição
nome = "Um nome";
idade = 30;


var primeiroNome;
var sobrenome;

primeiroNome = "Kaique"
sobrenome = "Moreto"

var nomecompleto = primeiroNome + " " + sobrenome


var insiraSeuNome = prompt("Insira seu nome: ")

console.log(insiraSeuNome);

alert("olá mundo!");
*/
var primeiroNome = prompt("Insira o seu primeiro nome: ");
var sobrenome = prompt("Insira o seu sobrenome: ");

var insiraNumeroUm = prompt("Insira o primeiro número: ");
var insiraNumeroDois = prompt("Insira o segundo número: ")

var resultado = parseInt(insiraNumeroUm) + parseInt(insiraNumeroDois); //parseInt converte texto para numero inteiro, e parseFloat para decimal

alert("Olá " + primeiroNome + " " + sobrenome + ", o resultado da soma é: " + resultado);