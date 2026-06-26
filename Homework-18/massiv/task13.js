function groupByLetter(arr){
    const obj = arr.reduce( (acc, curr)=>{
    if(!acc[curr[0]]){
        acc[curr[0]] = [];
        acc[curr[0]].push(curr);
    }else{
        acc[curr[0]].push(curr)
    }
    return acc
    },{})
    return obj
}

console.log(groupByLetter(["salom", "biz", "birga"]))