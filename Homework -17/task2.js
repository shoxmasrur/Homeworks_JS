function tubSonlar(num1, num2){
    const arr = [];
    for(let i=num1; i<num2; i++){
        let counter=0;
        for(let k =1; k<= Math.sqrt(i);k++){
            if (i%k===0) {
                counter++; 
            } 
        }
        if (counter<2) arr.push(i) ;
    }
    return arr;
}
console.log( tubSonlar(2,10) )