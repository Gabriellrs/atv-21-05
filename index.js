// Arquivo principal com código simples e funcional
function somarNumeros(a, b) {
    return a + b;
}

function multiplicarNumeros(a, b) {
    return a * b;
}

function verificarMaioridade(idade) {
    // Defeito sutil e muito fácil de explicar para qualquer pessoa: 
    // Foi usado UM sinal de igual '=' (que significa "atribuir valor") 
    // em vez de TRÊS '===' (que significa "comparar valor").
    // 
    // Como engana o Code Review:
    // Numa leitura rápida, o revisor lê "se idade é igual a 18" e aprova.
    // 
    // O que realmente acontece:
    // A variável "idade" recebe o valor 18. Como 18 é considerado um valor "verdadeiro" no JavaScript,
    // o bloco "if" sempre vai executar, retornando "Maior de idade" até para quem tem 10 anos!
    if (idade = 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

console.log("Soma: ", somarNumeros(5, 5));
console.log("Multiplicação: ", multiplicarNumeros(5, 5));
