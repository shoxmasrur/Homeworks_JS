function catchNumber(func){
    const cache = {};
    return function(num){
        if (num in cache){
            console.log("hisoblamadi")
            return cache[num];
        }

        console.log("yangidan hisobladi")
        const result = multiply(num);
        cache[num]= result;
        return result;
    }
    }

    function multiply(num){
        return num*num
    }


const func = catchNumber(multiply)
console.log( func(4) ) 
console.log( func(4))
