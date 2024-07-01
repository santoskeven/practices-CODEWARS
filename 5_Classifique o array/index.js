function sortArray(array) {
    let impar = []
    let novo;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            impar.push(array[i])
        }
    }

    function removerArray(arr, itemsToRemove){
        return arr.filter(item => !itemsToRemove.includes(item));
    }

    //  console.log(impar)
   let newArray = removerArray(array, impar)



   console.log(impar.concat(newArray))
}

sortArray([5, 8, 6, 3, 4])