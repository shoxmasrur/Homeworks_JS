function isPolindrom(num){
    const reversedNum = Number(String(num).split("").reverse().join(""));
    console.log( num===reversedNum ? true : false );
}
isPolindrom(121)