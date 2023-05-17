class Animal {

    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    
}

class Cat extends Animal {

    // constructor(firstname: string, lastname: string){
    //     super(firstname, lastname)
    // }

    // //default one when you extends on other class, only 1 extend class allowed
    constructor(...args: [string, string]){
        super(...args);
    }

}

const lily = new Cat('Lily', 'Smith');




