function findJSON(str){
    try{
        JSON.parse(str);
    }catch(error){
        return "malumot to'liq matn ko'rinishida emas"
    }
}

obj = {nam:"aziz"};

console.log(findJSON(obj));