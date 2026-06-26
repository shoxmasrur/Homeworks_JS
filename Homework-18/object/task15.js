

function findNestedObj(obj){
    for (let i in obj){
        if(obj[i]!==null && typeof obj[i] ==="object" && !Array.isArray(obj[i])){
            return findNestedObj(obj[i])
        }
    }
    return obj
    
}

console.log( findNestedObj({a:12, b:{d:45, c:{j:43}}}) )