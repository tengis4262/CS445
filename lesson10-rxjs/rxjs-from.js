const { from } = rxjs;

//emit array as a sequence of values
const arraySource = from([1, 2, 3, 4, 5]);
//output: 1,2,3,4,5
const subscribe1 = arraySource.subscribe(val => console.log(val));

//emit result of promise
const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
//output: 'Hello World'
const subscribe2 = promiseSource.subscribe(val => console.log(val));