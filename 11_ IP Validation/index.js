function isValidIP(str) {
   const VarSplit = str.split('.')
   const regex = /^(25[0-5]|2[0-4][0-9]|1?[0-9]?[0-9])$/;

   if(VarSplit.length != 4) return

   for(let i = 0; i < VarSplit.length; i++){
    
    if(VarSplit[0][0] == 0 && VarSplit[1][0] == 0 && VarSplit[2][0] == 0 && VarSplit[3][0] == 0){ 
        console.log('passou no teste')
        // return true
    }else{
        
        console.log('nem todos os valores são 0')
        return false
        
    }

   }

   for(let i = 0; i < str.length; i++){
    if(!regex.test(str[i]) && str[i] != '.'){
        // console.log(str[i])
        // console.log('false')
        // console.log('Valor não aceito ' + str)
        return 
    }else{
        // console.log('Valor aceito ' + str)
        return str
    }
   }
}

isValidIP('0.0.0.0')