function mostFrequentChar(str){
let maxCount =0;
let maxChar =""
const map = new Map()

for (let char of str){
    if (char ===" "){
        continue;
    }
    if (!map.get(char)){
        map.set(char,1)
    }else{
        map.set(char, map.get(char)+1)
    }
};

for (let [char, count] of map){
    if(count > maxCount){
        maxCount = count;
        maxChar = char
    }
}
return {char: maxChar, count:maxCount}
    
}


console.log( mostFrequentChar("sasssl00000om") )



