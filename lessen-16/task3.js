function containsDuplicate(arr){
    const set = new Set( arr );
    console.log( arr.length === set.size ? "qaytalanuvchi element mavjud emas" : "qaytalanuvchi element mavjud " );
        
}

containsDuplicate([1,2,3,1]);