function timeFormat(num){
    let minut = Math.floor(num/60);
    let secund = num%60;
    if (minut<10) minut = `0${minut}`
    if (secund<10) secund = `0${secund}`
    return `${minut}:${secund}`
}
console.log(timeFormat(355))