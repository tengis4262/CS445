const { from, of } = rxjs;
const { map, filter, reduce } = rxjs.operators;

console.log('Start');
from([1, 2, 3])
    .pipe(
        map(n => n + 3),
        filter(n => n >= 5)
    )
    .subscribe(
        x => console.log(x),
        error => console.error(error),
        () => console.log('done')
    );
console.log('End');


const source = of(1, 2, 3, 4);
const example = source.pipe(reduce((acc, val) => acc + val));
//output: Sum: 10'
const subscribe = example.subscribe(val => console.log('Sum:', val));