const anagramma = function (str1,str2){
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");
   console.log( str1===str2 ? true : false );
}
 anagramma("tom", "mot") 