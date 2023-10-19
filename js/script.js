// Este exercício irá mostrar o nome da pessoa e calcular a sua idade atual dela...
var name = prompt("Insira o seu nome: ");
var yearOfBirth = Number(prompt("Insira o seu ano de nascimento: "));
var currentYear = Number(prompt("Insira o ano atual: "));
var age = currentYear - yearOfBirth;
alert(name + ", a sua idade atual é " + age + " ano(s).");
