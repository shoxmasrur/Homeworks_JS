function isValid(str){
    const matn = "qavs yopilmagan"
    for(let i=0; i<str.length; i=i+2){
        if(str[i]==="("){
            if (str[i+1]!==")"){
                return matn;
            }
            
        }else if(str[i]==="["){
            if (str[i+1]!=="]"){
                return matn;
            }
        }else if(str[i]==="{"){
            if (str[i+1]!=="}"){
                return matn;
            }
        }
    }
    return true

}

console.log(isValid("{}()"))