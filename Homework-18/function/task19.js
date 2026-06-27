function binaryNum(num){
    const arr = [];
    while(num){
       num%2===0 ? arr.unshift(0) : arr.unshift(1)
       num= Math.floor(num/2)
    }
    return Number(arr.join(""))
}

console.log( binaryNum(4) )