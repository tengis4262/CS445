class Person {
    constructor(firstname, lastname) { 
        if(!Person.instance) {
            this.firstname = firstname;
            this.lastname = lastname;
            Person.instance = this;
        }
        return Person.instance;      
    }
}

const p1 = new Person('John', 'Hopkins');
const p2 = new Person('Edward', 'Smith');
const p3 = new Person('Edward2', 'Smith2');

console.log(p1 === p2);
console.log(p1 === p3);