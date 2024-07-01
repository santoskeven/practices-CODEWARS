const valor = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']
function IsvalidWalk(walk){
    if(walk.length !== 10){
        console.log('falsoo')
        return false
    }


     let dir = { n: 0, s: 0, w: 0, e: 0}

     for(let i = 0; i < walk.length; i++){
        dir[walk[i]]++ 
     }

     return dir['n'] === dir['s'] && dir['w'] === dir['e'];
  
}

IsvalidWalk(valor)