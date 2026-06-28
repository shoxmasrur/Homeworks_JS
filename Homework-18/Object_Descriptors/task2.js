const obj ={}
Object.defineProperty(obj, "nom", {
    value:"Aziz",
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(obj.nom)
t