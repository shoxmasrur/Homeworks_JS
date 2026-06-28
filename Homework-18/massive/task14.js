const multiplication = (arr)=>{
    let sum = 1;
    for (let i of arr){
        sum*=i
    }
    return sum
}

console.log(multiplication([1,3,4]))