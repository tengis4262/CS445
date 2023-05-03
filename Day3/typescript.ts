let age: number = 32;


let something: any = 4;
something = false;

something = {
    x: 1,
    y: 2
}
something = 'blabla'

function add(num1: number, num2: number): void {
    console.log(num1 + num2)
}

let user: [number, string, boolean, number, string] = [1, "John", true, 20, "faculty"];

const family: [number, string][] = [[1, "john"], [2, "Mike"], [3, "Bred"]];

//Union (number | string)
let size: (number | string) = 0;
size = 'Small'

function getClothes(size: (number | string)): void {

}

//Data type Array

const names = [true, [1, 2], 'abc', 19]


const fruits: string[] = ['apple', 'banana', 'orange']

const fruits2: Array<string> = ['apple', 'banana', 'orange']

const ages: (string | number)[] = [18, 'eighteen', 'five', 5]
const age1: Array<string | number> = [18, 'eighteen', 'five', 5]

//Type Inference

let msg1: string = 'hello';
let msg2:string;
msg2 = "Hello";


let msg3 = "SAINUU"