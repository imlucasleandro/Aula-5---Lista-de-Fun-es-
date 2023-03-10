/* Crie uma função chamada contaLetras que recebe uma string como parâmetro e retorna um
objeto contendo a contagem de cada letra presente na string. Por exemplo, a string "banana"
deve retornar { b: 1, a: 3, n: 2 } */

function contaLetras(str) {
    // Cria um objeto vazio para armazenar a contagem de cada letra
    const contagemLetras = {};
    
    // Percorre cada letra da string
    for (let i = 0; i < str.length; i++) {
      // Obtém a letra atual
      const letra = str[i];
      
      // Verifica se a letra já está no objeto de contagem de letras
      if (contagemLetras[letra] === undefined) {
        // Se não estiver, adiciona a letra ao objeto com a contagem igual a 1
        contagemLetras[letra] = 1;
      } else {
        // Se já estiver, incrementa a contagem da letra
        contagemLetras[letra]++;
      }
    }
    
    // Retorna o objeto de contagem de letras
    return contagemLetras;
  }
 
  const contagem = contaLetras("banana");
  console.log(contagem);
  