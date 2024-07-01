//  let number = [];
//  let soma = 0;

//  for (let i = 1; i < 42; i++){
//     console.log(i)
//     if( i  % 2 !== 0){
//         number.push(i)
//         soma+=i
//     }

    

//     console.log(number)
//     console.log(soma)
//  }
function generatePyramid(rows) {
  let number = 1; // Início da sequência de números
  let soma = 1


  for (let i = 1; i <= rows; i++) {
    let row = ''; // Inicializa a linha vazia

    for (let j = 1; j <= i; j++) {
      row += number + ' '; // Adiciona o número atual à linha
      number += 2; // Incrementa o número
    } 

    console.log(row.trim()); // Imprime a linha sem espaços extras
    // console.log('soma ' + soma)

    for(let i = 0; i < number.legth; i++){
        soma+=i
    }
    console.log(number.legth)
  }
}

// Exemplo: Gerar uma pirâmide com 5 linhas
generatePyramid(6); 