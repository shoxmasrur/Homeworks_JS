const obj ={
    eni:4,
    boyi:5
};

Object.defineProperty(obj, "_yuza",{
    get(){
        return this.eni * this.boyi
    },
    enumerable: true,
    configurable:true
})

console.log(obj)
