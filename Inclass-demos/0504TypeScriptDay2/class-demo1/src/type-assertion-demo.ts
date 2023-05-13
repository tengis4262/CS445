let code: any = 123;

let some = <number>code; //any

// some = 'str';

let some2 = code as number;
some2 = 123;
// some2 = 'abc';

interface Student {
    name: string;
    age: number;
}

let student = <Student>{};
student.name = 'John';
student.age = 20;

// let arr = [];
// arr[0] = 1;
