const Temperature = {
    _selsiy: 38
}

Object.defineProperty(Temperature, "_faregeyt", {
    
    get(){
        return this._selsiy*9/5 +32
    },
    set(value){
        this._selsiy =  (value-32)*5/9;
        
    }
})
Temperature._faregeyt =1000
console.log(Temperature._selsiy)