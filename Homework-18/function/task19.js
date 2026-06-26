function debounce(time){
    setTimeout( ()=>{
        console.log("Belgilangan vaqt o'tdi")
    }, time*1000)
}

debounce(3)