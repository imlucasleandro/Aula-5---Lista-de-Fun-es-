/* Escreva uma função (usando arrow function) que receba dois parâmetros início
e fim. Essa função deve imprimir todos os números ímpares que estão entre
esses valores. Por padrão os valores devem ser 0 para início e 100 para fim.
Mas caso esteja ao contrario o codigo deve ter um condição que corriga a
ordem dos parâmetros caso a função receba o valor maior antes do menor. */ 

const imprimeImpares = (inicio = 0, fim = 100) => {
    // Verifica se o valor de inicio é maior do que o valor de fim
    if (inicio > fim) {
      // Se for, troca os valores de inicio e fim
      const temp = inicio;
      inicio = fim;
      fim = temp;
    }
    
    // Percorre os números entre inicio e fim, inclusive
    for (let i = inicio; i <= fim; i++) {
      // Verifica se o número é ímpar
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  imprimeImpares(); // imprime todos os ímpares entre 0 e 100

    