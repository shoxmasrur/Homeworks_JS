function compareObj(obj1,obj2){
    const arr1 = Object.keys(obj1);
    const arr2 = Object.keys(obj2);
    if(arr1.length===arr2.length){
        for (let i in obj1){
            if( i in obj2){
                if(obj1[i]!==null && typeof obj1==="object"){
                    return compareObj(obj1[i], obj2[i]);
                }else{
                    if(!obj1[i]===obj2[i]){
                        return false;
                    }
                }
            }else{
                return false;
            }
        }
    }else{
       return false;
    }
    return true;
}

console.log( compareObj({a:1, b:{d:37}}, {b:{c:4},a:1}) )