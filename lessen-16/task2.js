function isAnagramma(text1,text2){
    const matn1 = text1.split("").sort().join("");
    const matn2=text2.split("").sort().join("");
    matn1===matn2 ? console.log("Anagram") : console.log("Anagram emas");
    
}

isAnagramma("listen", "silent");