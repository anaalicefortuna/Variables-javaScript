const prompt = require ('prompt-sync')();

const userName = prompt('Digite Seu Nome: ');

const sobrenome = prompt('Digite Seu Sobrenome: ');



const peso = prompt('Digite O Seu Peso: ');

const altura = prompt('Digite Sua Altura: ');

const dataInternacao = prompt('Data que deu entrada na intenção: ');

const diabete = prompt ('Você é diabético?')

console.log(`\nNome Completo: ${userName}\nPeso: ${peso}\nAltura: ${altura}\nData da Internação: ${dataInternacao}\nDiabético: ${diabete}`)

