const { from, interval } = rxjs;
const { map, mergeMap, flatMap } = rxjs.operators;

const seconds = interval(1000);
const promiseSource = from(fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json()));

// emits Observable
seconds.pipe(map(x => promiseSource))
    .subscribe(data => console.log(data));

//emits post data
seconds.pipe(mergeMap(x => promiseSource))
    .subscribe(data => console.log(data));

//emits post data
// seconds.pipe(flatMap(x => promiseSource))
//     .subscribe(data => console.log(data));