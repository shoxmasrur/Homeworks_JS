class ValidationError extends Error{
    constructor(message, field){
        super(message);
        this.name = "ValidationError"
        this.field  =field;
    }
}


function checkAdult(age){
    if(age<18){
        throw new ValidationError("siz voyaga yetmagansiz", age)
    }else{
        console.log("siz dasturdan foydalana olasiz")
    }
}

try{
    checkAdult(17)
}catch(error){
    if(error instanceof ValidationError){
        console.log(`${error.name}    maydon  ${error.field}, message ${error.message}` )
    }
}

