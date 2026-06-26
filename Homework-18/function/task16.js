function findfibinachiNUm(num){
   if (num === 0) return 0;
   if (num===1) return 1;

   return findfibinachiNUm(num-1) +findfibinachiNUm(num-2)

}
console.log(findfibinachiNUm(7))