abstract class Human {
    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    setFirstname(firstname: string) {
        this.firstname = firstname;
    }

    abstract getFullName(): string;
}

class Meditator extends Human {
   
    getFullName(): string {
        return ``;
    }
    
}

class Faculty extends Human{

    getFullName(): string {
        return ``;
    }

}

// const p = new Meditator('Edward', 'lastname');