const img: {
    src: string;
    coords: Array<number>;
    allignment: string;

} = {
    "src": "images/logo.png",
    "coords": [250, 100, 200, 400],
    "allignment": "center"
}



interface Message {
    text: string;
    offset: [number, number]
}


class Message1 {
    constructor(public text: string, public offset: [number, number]) {
    }
}

const msg: Message[] = [
    { "text": "save", "offset": [0, 10] },
    { "text": "save", "offset": [0, 10] },
    { "text": "save", "offset": [0, 10] }
]
interface Stu {
    firstname: string;
    lastname: string;
    middlename?: string;
    course: Array<(number | string)>
}


class Stu1 {
    firstname: string;
    lastname: string;
    middlename?: string;
    course: Array<(number | string)>
    constructor(firstname: string, lastname: string, course: Array<(number | string)>,middlename?: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.middlename = middlename;
        this.course = course;
    }
}
const Students: Stu1[] = [
    { firstname: 'John', lastname: 'Smith', course: [445, 'MWP', 330, 'React'] },
    { firstname: 'John', middlename: "Bhote", lastname: 'Smith', course: [445, 'MWP', 330, 304, 'React'] },
    { firstname: 'John', lastname: 'Smith', course: [445, 'MWP', 'WAP', 330, 'React'] }
]