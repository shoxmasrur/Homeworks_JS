function findIndex(){
    try{

        const arr = [1,2,4,5,6,3,2];
        const index = 10;
        try{
            if(arr[index]===undefined){
            throw new RangeError("bu index mavjud emas")
            }
        }catch(err){
            if (err instanceof RangeError && arr.length<10){
                throw new Error("bu massiv chegarasidan tashqarida")
            }else{
                return 9
            }
        }
    }catch(error){
        console.log(error.message);
    }
}


findIndex()