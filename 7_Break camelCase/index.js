function solution(string) {
    // if(!string) {return console.log("''")}
    // let split = string.split('')
    // for(let i=0; i < split.length; i++){
    //     console.log(split.length)
    //     if(split.length > 11){
    //         switch(i){
    //             case 4:
    //                 split[i] += ' ' 
    //                 break;
    //             case 10:
    //                 split[i] += ' ' 
    //                 break;
    //         }
    //     }else{
    //         switch(i){
    //             case 4:
    //                 split[i] += ' ' 
    //                 break;
    //         }
    //     }
    // }

   
    // let test = split.join('').split(' ')
    // if(test[1].length < 4){
    //     return console.log(string)
    // }else{
    //     return console.log(split.join(''))
    // }

    let result =  '';
    for(let i= 0; i < string.length; i++){
        if(string[i] === string[i].toUpperCase()){
            result += ' ' + string[i];
        }else{
            result += string[i]
        }

        return result
    }
}

solution("camelCasing")