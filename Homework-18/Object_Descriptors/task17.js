const obj ={
    name: "Aziz",
}

Object.defineProperty(obj, "_counter",{
    value:0,
    writable:true,
    enumerable:true,
    configurable:true
        
    
});

Object.defineProperty(obj, "counter",{
    get(){
        return this._counter = (this._counter ||0) +1
    }
})

console.log(obj.counter)
console.log(obj.counter)
console.log(obj.counter)



