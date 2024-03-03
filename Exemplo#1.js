
// Exemplo 1
// Variáveis podem armazenar diferentes tipos de valores como textos ou números:

var tipoNumber = 12
var tipoString1 = 'Texto entre aspas simples'
var tipoString2 = "Texto entre aspas duplas"
var tipoNull = null
var tipoUndefined = undefined
var tipoObject = { nome : 'José da Silva', idade : 18 }
var tipoBoolean1 =  false
var tipoBoolean2 = true

console.log(tipoNumber);
console.log(tipoString1);
console.log(tipoString2);
console.log(tipoNull);
console.log(tipoUndefined);
console.log(tipoBoolean1);
console.log(tipoBoolean2);
console.log(tipoObject);

// Exemplo 1
// Podemos atribuir a uma variavel o resultado de uma expressão:

var peso = 80.5
var altura = 1.80
var imc = peso / (altura * altura)

console.log("O imc é: " + imc)