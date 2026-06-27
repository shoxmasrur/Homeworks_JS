const obj = {
    name:"aziz", 
    age: 32,
    isMarried: true,
    address: {
        city: "Navoiy",
        district: "Navbahor"
    }
}

const jsonFile = JSON.stringify(obj);

const obj1 =JSON.parse(jsonFile)

const flatObj = function (obj, prifix=""){
     const newObj = {};
    for(let [key, value] of Object.entries(obj)){
        let newKey = prifix!=="" ? `${prifix}.${key}`: key
        if(value!==null && !Array.isArray(value) && typeof value === "object"){
            const result = flatObj(value, newKey )
                for (let [k,v] of Object.entries(result)){
                    newObj[k]=v
                }
                
        }else{
            newObj[newKey]= value
            }
        }
        
    return newObj;
}
    
    const jsonfile2 = JSON.stringify( flatObj(obj), null, 2 )
    console.log(jsonfile2)