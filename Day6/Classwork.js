class Fulltime{
    constructor(){
        this.hourly = 15;
    }
}
class Parttime{
    constructor(){
        this.hourly = 12;
    }
}
class Temporary{
    constructor(){
        this.hourly = 10;
    }
}

export default class Factory{
    static createEployee(type){
        let emp;

        if(type==="fulltime"){
            emp = new Fulltime();
        }else if(type==="parttime"){
            emp = new Parttime();
        }else if(type==="temporary"){
            emp = new Temporary();
        }else{
            throw new Error("NOT SUPPORTED");
        }
        this.say = function(){
            console.log(this.type + "' : rate " + this.hourly + "/hour")
        }
        emp.type = type;
    }
}