const findSum = (arr)=>{
    const sum = arr.reduce((acc,curr)=>acc+curr, 0)
    return sum;
}
console.log(findSum([10, 20, 30] ))