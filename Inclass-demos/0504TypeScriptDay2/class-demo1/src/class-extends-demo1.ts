interface IPerson {
    firstname: string;
    lastname: string;
}

interface IPlay {
    playViolin(): void;
}

class PhoneNumber {

}

class Address {
    street: string;
    city: string;
    zipCode: number = 52567;

    constructor(street: string, city: string){
         // this = {}
        this.city = city; // {street: '1000'}
        this.street = street; // {street: '1000', city: 'FF'}
        //return this;
    }

    print(){
        console.log(`${this.street} ${this.city} ${this.zipCode}`);
    }
}

class Student extends Address implements IPerson, IPlay {
    major: string;
    firstname: string = 'Edward';
    lastname: string;

    constructor(street: string, city: string, major: string, lastname: string) {
        super(street, city);
        //this =  {street: '1000', city: 'FF'}
        this.major = major; // {street: '1000', city: 'FF', major: 'MSD'}
        this.lastname = lastname;
        // return this;
    }

    getMajor() {
        return this.major;
    }

    playViolin(): void {
        console.log('play....');
    }

    print(): void {
        console.log(`${this.firstname} ${this.lastname}`);
        super.print();
    }
}

let stu = new Student('1000', 'FF', 'MSD', 'SMith');
stu.print();


// class Student extends Address implements IPerson, IPlay{

// }