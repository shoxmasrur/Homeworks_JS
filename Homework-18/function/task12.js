function multiply(a){
    return function b (b){
        return b*a

    }
}

const func = multiply(2);
console.log(func(5) )
console.log(func(4))