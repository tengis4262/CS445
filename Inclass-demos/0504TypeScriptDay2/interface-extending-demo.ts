interface IPhone {
    areaCode: number;
    middle: number;
    number: number;
}

interface IAddress {
    street: string;
    city: string;
    zipCode: number;

    getAddress(): string;
}

interface Person extends IAddress, IPhone {
    firstname: string;
    lastname: string;

    getName(): string;
    // getAddress(): any;
}

const p: Person = {
    street: '1000 N 4th',
    city: 'Fairfield',
    zipCode: 52557,
    firstname: 'Edward',
    lastname: 'Smith',

    areaCode: 641,
    middle: 451,
    number: 1234,

    getName() {
        return `${this.firstname} ${this.lastname}`;
    },
    getAddress: function() {
        return `${this.street} ${this.city}, ${this.zipCode}`;
    }

}