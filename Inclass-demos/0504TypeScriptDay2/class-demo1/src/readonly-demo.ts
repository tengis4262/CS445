class Person5 {
    readonly firstname: string = 'John';
    lastname: string = 'Smith';
}

const p5 = new Person5();
p5.lastname = 'dfadsfad';
// p5.firstname = 'dfdfsdf';
console.log(p5.firstname);