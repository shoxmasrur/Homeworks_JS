obj={name:"aziz"};
Object.defineProperty(obj, "name",{writable:false})
console.log(obj.name)
obj["name"] = "Sattor"
console.log(obj.name)
obj.name = "sattor"
console.log(obj.name)

