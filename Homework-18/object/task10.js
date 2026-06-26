function addObj(obj1,obj2){
    const newObj = {...obj1, ...obj2}
    console.log(newObj)
}
addObj({name:"aziz", address: "Toshkent"}, {name: "shoh", age:32})
