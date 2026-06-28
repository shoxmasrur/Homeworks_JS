const obj={
     name:"Aziz"
}
Object.defineProperty(obj, "name",{
    enumerable:false
})

console.log(obj.propertyIsEnumerable("name") )