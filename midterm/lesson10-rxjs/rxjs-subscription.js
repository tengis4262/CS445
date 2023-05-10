const { interval } = rxjs;

//emit value in sequence every 1 second
const observable = interval(1000);
//output: 0,1,2,3,4,5....
const subscription = observable.subscribe(x => console.log(x));

// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
setTimeout(() => subscription.unsubscribe(), 5000);