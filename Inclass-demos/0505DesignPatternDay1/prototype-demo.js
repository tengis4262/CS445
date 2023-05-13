const car = {
    name: 'Toyota',
    drive: function(){
        console.log('I can drive');
    },
    honk: function(){
        console.log('Beep beep');
    }
}

const mycar = Object.create(car); //car is an object
console.log(mycar);
mycar.drive();
mycar.honk();


function Student(firstname, lastname){
    //this = {}
    this.firstname = firstname;
    this.lastname = lastname;
    this.getFirstname = function(){
        return this.firstname;
    }
    //return this;
}


Student.prototype.getLastname = function(){
    return this.lastname;
}

const stu1 = new Student('Edward', 'Smith');
console.log(getFirstname);
console.log(stu1.getLastname());
console.log(stu1.getFirstname());
const stu2 = new Student('John', 'Hopkins');
console.log(stu2.getLastname());
console.log(stu2.getFirstname());




