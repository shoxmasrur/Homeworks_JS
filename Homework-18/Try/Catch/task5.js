const yosh =10

try{
    if(yosh<18){
    throw new Error("Bu dastur 18 yoshdan kattalar uchun")
}
}catch(error){
    console.log(error.message)
}