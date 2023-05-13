// let family: [number, string][];
let family: Array<[number, string]>
family = [[1, "John"], [2, "Mike"], [3, "Mada"]]


let a: Array<string[]> = [['a', 'b', 'c'], ['d', 'h']];

class University {

    name: string;
    dept: string;

    constructor(name: string, dept: string) {
        this.name = name;
        this.dept = dept;
    }

    graduation(year: number): void {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

let miu: University = new University("MIU", "MSD");
miu.graduation(2021);