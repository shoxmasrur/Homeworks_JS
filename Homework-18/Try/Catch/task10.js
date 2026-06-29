function randomsaon(){
    if(Math.random()>0.3){
        throw new Error("tizimda xatolik")
    }else{
        return "Malumotlar muvaffaqiyatli yuklandi"
    }
}

for(let i = 0; i<3; i++){
    try{
        randomsaon();
        console.log("Malumotlar yuklandi")
        break;
    }catch(err){
        console.log(`${i}chi urunish xato turi: ${err.name}`)

        if(i===2){
            console.log("malumotlar yuklanmadi")
        }
    }
}