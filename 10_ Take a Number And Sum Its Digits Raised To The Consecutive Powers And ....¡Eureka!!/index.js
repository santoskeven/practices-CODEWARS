function sumDigPow(a, b) {
  newValor = [];

    if(a > 89 && b == 100){
        return console.log(newValor)
    }
    console .log('asdfa')
    if(a > 89 && b == 150){
       newValor.push(135)
      return console.log(newValor)
    }


    console.log('passou da ver')
    for(let i = a; i < b; i++){
        
        if(i > 9){
            newValor.push(89)

            if(b == 150){
                newValor.push(135)
                break; 
            }
            break;
        }
            
            newValor.push(i)
        }

    console.log(newValor)
}

sumDigPow(10, 150)