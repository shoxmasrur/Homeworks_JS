function flatObj(obj, prefix =""){
    let newObj = {}
    let objName="";

    
    for(let i in obj ){
        
        prefix!=="" ? objName=`${prefix}.${i}`: objName = i


        if (obj[i]!==null && typeof obj[i]==="object" && !Array.isArray(obj)){
                const childFlat= flatObj(obj[i], objName)
                newObj = {...newObj, ...childFlat}
        }else{
            newObj[objName]=obj[i]
        }
    }

    return newObj


}
console.log(flatObj({a:{b:1,C:1}, g:1}))