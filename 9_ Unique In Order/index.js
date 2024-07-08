var uniqueInOrder=function(iterable){

    if(typeof iterable == 'object'){

        const listaUnica = Array.from(new Set(iterable));
        return listaUnica
        // console.log(listaUnica);

    }else{

      const split = iterable.split('')
      let newValor = '';
      let count = 0;
      for(let i = 0; i < split.length; i++){
        if(count == 0){
          newValor += split[i] 
          count++;
        }else{
          if(split[i] == split[(count - 1)]){
            newValor += '' 
          }else{
            newValor += split[i]
          }
          count++;
        }
      }
      return newValor.split('')
      // console.log(newValor.split(''))
      
    }
  }

// uniqueInOrder([1,2,2,3,3])
// uniqueInOrder('AAAABBBCCDAAaBBB')