function checkEmail(email){
    if(email.includes("@") && email.length>5){
        console.log("Muvoffaqiyatli")
    }else{
        throw new Error("siz noto'g'ri email kiritdingiz")
    }
}

try{
    checkEmail("shoh9953")
}catch(err){
    console.log(err.name)
}