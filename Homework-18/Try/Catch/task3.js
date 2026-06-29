obj = {nam:"aziz"}
try{
    JSON.parse(obj)
}catch(error){
    console.log("siz kiritgan malumot string emas")
}finally{
    console.log("jarayon tugatildi")
}