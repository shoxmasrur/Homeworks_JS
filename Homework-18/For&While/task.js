// function starts(num){
//     let str =""
//     for(let i=0; i<num; i++){
//         str+="*"
//     }
//     console.log(str)
// }
// starts(5)

    
function tupSonlarTop(num){
    if(num<=1) return "bu songacha toq sonlar mavjud emas";
    const arr = [];
    for(let i=2; i<=num; i++){
        let counter = 0;
        for(let k=1; k<=i; k++){
            if(i%k===0) counter++;
        }
        if(counter<=2) arr.push(i);
    }
    return arr;
}
console.log(tupSonlarTop(10))

 