const map1 = new Map([["bir", 1], ["ikki",2], ["uch",3]])
const map2 =  new Map([["uch", 3], ["to'rt", 4], ["besh",5]] )
for(let [key,value] of map1){
    if(map2.has(key)){
        map2.set(key, value+map2.get(key))
    }else{
        map2.set(key, value)
    }
}
console.log(map2)



    



 