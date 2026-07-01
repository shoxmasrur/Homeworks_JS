class ValidationError extends Error{
    constructor(message,field){
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

class DatabaseError extends Error{
    constructor(message){
        super(message);
        this.name = "DatebaseError";
    }
}

function checkJSON(JsonFile){
    if(typeof JsonFile !=="string"){
        throw new DatabaseError("Database bilan xatolik")
    }else if(!JSON.parse(JsonFile).name){
        throw new ValidationError("user ismini kiritmagan")
    }else{
        console.log("boshqa xatolik")
    }

}


const obj = {age: 32}
const jsonFile = JSON.stringify(obj)

try{
    checkJSON(jsonFile)
}catch(error){
    if(error instanceof ValidationError){
        console.log("xatolik: 404")
    }
    if (error instanceof DatabaseError){
        console.log("xatolik 500")
    }else{
        console.log("tizimda qandaydir xatolik bor")
    }
}


