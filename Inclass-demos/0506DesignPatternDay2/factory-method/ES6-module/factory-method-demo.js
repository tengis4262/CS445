class Fulltime {
    constructor() {
        this.hourly = 15;  
    }
}

class Partime {
    constructor(){
        this.hourly = 12;
    }
}

class Temporary {
    constructor(){
        this.hourly = 10;   
    }
}

class Commission {
    constructor(){
        this.hourly = 0;   
    }
}

export default class Factory {
    static createEmployee(type){
        let emp;

        if(type === 'fulltime') {
            emp = new Fulltime();
        } else if(type === 'parttime') {
            emp = new Partime();
        } else if(type === 'temporary') {
            emp = new Temporary();
        } else if(type === 'commision'){
            emp = new Commission();
        } else {
            throw new Error('NOT SUPPORTED');
        }

        emp.type = type;
        emp.say = function () {
            console.log(this.type + ": rate " + this.hourly + "/hour");
        }
        return emp;
    }
}

/** The end of 1 system */
//Abstract Factory