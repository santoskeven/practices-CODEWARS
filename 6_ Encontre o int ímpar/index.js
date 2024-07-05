let count = 0;
function findOdd(a) {
    // let count = 0;
    // for(let i = 0; i < a.length; i++){
    //     if(a[i] % 2 !== 0){
    //         count++
    //     }
    // }

    // return console.log(count)

  
    a.forEach((nome, i) => {
       
        if(a[i] % 2 !== 0){
            count++
            // console.log(count)
        }
    });
     console.log(count);
}

   findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])

//    retornar quantas vezes um determinado numero impar repete (o valor repedito deve ser inteiro par)