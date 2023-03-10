/* Crie uma função chamada converteParaCelsius que recebe uma temperatura
em Fahrenheit como parâmetro e “retorna” essa temperatura em Celsius. A
fórmula para conversão é: C = (F - 32) / 1.8. */

function converteParaCelsius(temperaturaFahrenheit) {
    const temperaturaCelsius = (temperaturaFahrenheit - 32) / 1.8;
    return temperaturaCelsius;
  }

  const temperaturaF = 86;
const temperaturaC = converteParaCelsius(temperaturaF);
console.log(`${temperaturaF} Fahrenheit é igual a ${temperaturaC} Celsius.`);
