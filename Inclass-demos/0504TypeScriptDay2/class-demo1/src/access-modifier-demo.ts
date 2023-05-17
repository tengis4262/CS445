class Course {
    public code: string = '445';
    name: string = 'MAP';
}

let c = new Course();
c.code = 'CS445';
c.name = 'Modern Async Prog';

console.log(c);

class Course2 {
    code: string;
    name: string;

    constructor(code: string, name: string){
        this.code = code;
        this.name = name;
    }
}

class Course3 {
    
    constructor(public code: string, public name: string){
      
    }
}


class Course4 {
    private code: string = '445';
    name: string = 'MAP';

    
}

const c2 = new Course4();
c2.name = 'Modern Async Prog';
// c2.code = 'CS445';


class Person4 {
    public firstname: string;
    private age: number;
    protected lastname: string;

    constructor(firstname: string, age: number, lastname: string) {
        this.firstname = firstname;
        this.age = age;
        this.lastname = lastname;
    }

    setAge(age: number){
        if(age < 1 || age > 150) {
            throw new Error('Invalid Age');
        } else {
            this.age = age;
        }
    }
}

const p4 = new Person4('John', 20, 'Smith');
p4.firstname = 'dfadfdsfds';
p4.setAge(-100);
// p4.lastname = 'dfdf';

class Staff extends Person4 {

    setLastName(lastname: string) {
        this.lastname = lastname;
    }


    print(){
        console.log(`${this.firstname} ${this.lastname} `);
    }

}


const staff1 = new Staff('John2', 22, 'Smith2');
staff1.firstname = 'dfdfd';


