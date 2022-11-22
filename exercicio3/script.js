const operacao1 = 5 > 20 && 5 < 2;
console.log(operacao1);

const operacao2 = 5 == 5 || 5 == "5"
console.log(operacao2)

const operacao3 = !20 > 50
console.log(operacao3)

const operacao4 = !20 >50 || 50 > 60
console.log(operacao4)







// Na aula passada vocês começaram a implementar um sistema para o Rh de uma empresa. 

// Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:**

// **O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**

// Calcule o salário de Fulano da Silva levando em consideração os dados que se seguem:

// a) Auxílio creche por filho:  R$45,50

// b) Comissão de 10% sobre o total de vendas mensal

// c) Total de vendas dos meses de janeiro a junho:

//     - Janeiro: R$ 5.784,50
//     - Fevereiro: R$ 3.418,41
//     - Março: R$ 4.124,10
//     - Abril: R$ 1.874,00
//     - Maio: R$ 7.000,00
//     - Junho: R$ 9.450,00

// d)  Desconto do INSS 5% do salário

// Calcule:

// 1) O salário fixo mais o auxílio creche

// 2) Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
//   ( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos  somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)

const salarFix = 2000;
const auxCrex = 45.50;
let total = salarFix + auxCrex
let res = total.toFixed(2)

console.log(total)


let comissao = 10/100

let janeiro = salarFix + 5784.50*comissao
let fevereiro = salarFix + 3418.41*comissao
let marco = salarFix + 4124.10*comissao
let abril = salarFix + 1874.00*comissao
let maio = salarFix + 7000.00*comissao
let junho = salarFix + 9450.00*comissao
let aux = 45.50*2

let comisJane = salarFix*comissao
let inss = 5/100