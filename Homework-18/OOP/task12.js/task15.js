const obj1 = {
    name:"SHohruh",
    salomlash(){
        console.log("salom  mening ismim ", this.name)
    }
}

const obj2= {
    xayrlash(){
        console.log("korishquncha xayr")
    }
}

const obj3 = {
    name:"Aziz"
}

Object.assign(obj3, obj2,obj1);
obj3.xayrlash()


