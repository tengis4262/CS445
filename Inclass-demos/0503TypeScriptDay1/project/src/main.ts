let something: any = 4;
something = 'abc';
something = true;
something = {
    x:1,
    y:2
};

function add(num1:number, num2:number): void{
    console.log(num1 + num2);
}

let res = add(1,2);
console.log(res);

const WEEKDAY = 'MONDAY';
