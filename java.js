let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
    k = k + 1
    soma = soma + k
}


document.write(soma)
console.log(soma)




function fibonacci(limit) {
    let fib = [0, 1];
    while (true) {
        let next = fib[fib.length - 1] + fib[fib.length - 2];
        if (next > limit) break;
        fib.push(next);
    }
    return fib;
}

function isFibonacci(num) {
    let fibSeq = fibonacci(num);
    return fibSeq.includes(num);
}

let num = parseInt(prompt("Digite um número:"));

if (isFibonacci(num)) {
    console.log(num + " pertence à sequência de Fibonacci.");
} else {
    console.log(num + " não pertence à sequência de Fibonacci.");
}







/*FATURAMENTO*/


function calcularFaturamento(dados) { let faturamentoDiario = dados.map(d => d.valor); let menorFaturamento = Math.min(...faturamentoDiario.filter(v => v > 0)); let maiorFaturamento = Math.max(...faturamentoDiario); let somaFaturamento = faturamentoDiario.reduce((a, b) => a + b, 0); let mediaMensal = somaFaturamento / faturamentoDiario.length; let diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaMensal).length; document.write(`Menor valor de faturamento: ${menorFaturamento.toFixed(2)}<br>`); document.write(`Maior valor de faturamento: ${maiorFaturamento.toFixed(2)}<br>`); document.write(`Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`); } function carregarDados() { fetch('dados.json').then(response => response.json()).then(data => calcularFaturamento(data)).catch(error => console.error('Erro ao carregar dados:', error)); }
window.onload = carregarDados;


/*percentual */


// Valores de faturamento por estado
let faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

let faturamentoTotal = Object.values(faturamento).reduce((a, b) => a + b, 0);

let percentuais = {};
for (let estado in faturamento) {
    percentuais[estado] = (faturamento[estado] / faturamentoTotal * 100).toFixed(2);
}


for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}
/*Inverter str */
function inverterString(str) {
    let stringInvertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

let texto = "Processo Seletivo";
let textoInvertido = inverterString(texto);
console.log(textoInvertido); // "tolipoC"
