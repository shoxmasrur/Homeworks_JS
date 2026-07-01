function gainErrors(obj){
    errors = []
    if(obj.name==="" || typeof obj.name ==="string"){
        errors.push("name string bolishi va kiritilishi shart")
    };

    if(!obj.email.includes("@")){
        errors.push("siz kiritgan email yaroqli emas")
    };

    if(obj.yosh<18){
        errors.push("yosh 18 yoshdan katta bo'lishi kerak")
    }
    return errors;
}


const obj = {
    name: "",
    yosh:17,
    email: "shoh18898"
}
console.log( gainErrors(obj) )