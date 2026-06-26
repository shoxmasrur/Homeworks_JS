function findNum(obj, k){
    const givenNum = Object.entries(obj).find( item=>item[1]===k)
    console.log(givenNum[0])
}

findNum({a:1, b:4, c:6}, 6)



