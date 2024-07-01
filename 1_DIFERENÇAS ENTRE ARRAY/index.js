// array1 = [1,2]
// array2 = [1]


function arrayDiff(a, b) {

    let difference;
    if(a.length == 0 || b.length == 0){
     difference = []
     console.log(difference)
     }else{
         difference = a.filter(x => !b.includes(x));
         console.log(difference)
     }
   
 }
 
 arrayDiff([],[3])



