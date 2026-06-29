class Guruh {
talabalarRoyhat =[];
qoshtalaba(name){
    if(typeof name ==="string"){
        this.talabalarRoyhat.push(name);
        console.log("muvoffaqiyatli");
    }else{
        console.log("faqat ism kiriting");
    };

}

royhat(){
    return this.talabalarRoyhat;
}
}

const talabalar = new Guruh()
talabalar.qoshtalaba("aziza");
talabalar.qoshtalaba("Sattor");
console.log(talabalar.royhat())