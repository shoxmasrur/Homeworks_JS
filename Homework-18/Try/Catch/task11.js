function findIndex(arr, index){
   try{
    if(arr[index]){
        return arr[index]
    }else{
        throw new Error("bunday index yoq")
    }
   }catch(err){
     return 20
   } 
}

console.log(findIndex([1,2,3,4], ))
