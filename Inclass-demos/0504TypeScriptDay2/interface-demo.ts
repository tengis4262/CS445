interface IEmloyee {
    firstname: string;
    lastname?: string;
    readonly age: number;

    setFirstName?(firstname: string): void;
    setLastName?: (lastname: string) => void;
    getAge: () => number;
    setName(firstname: string, lastname?: string): void;
}

const emp2: IEmloyee = {
    firstname: 'Irene',
    age: 2,
    getAge() {
        return this.age;
    },
    setName(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
};

// emp2.age = 9;
console.log(emp2.age);

const emp: IEmloyee = {
    firstname: 'Edward',
    lastname: 'Smith',
    age: 20,

    setFirstName(firstname) {
        this.firstname = firstname;
    },
    setLastName: function (lastname) {
        this.lastname = lastname;
    },
    getAge() {
        return this.age;
    },
    setName(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

// emp.age = 21;

