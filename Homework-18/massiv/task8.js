function findAvg(arr){
    return (arr.reduce((acc, curr)=>acc+curr,0))/arr.length
}

console.log(findAvg([4,8,12] ))