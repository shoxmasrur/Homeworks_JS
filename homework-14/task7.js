function daysBetween(date1, date2){
    let kun1 = date1.split("-");
    let kun2 = date2.split("-");
    if(kun1[2] > kun2[2]){
        return kun1[2] - kun2[2];
    }else {
        return kun2[2] - kun1[2];
    }
}

console.log(daysBetween("2025-01-01", "2025-01-10"));
console.log(daysBetween("2025-03-10", "2025-03-01"));
