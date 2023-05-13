class Subject {
    constructor() {
        this.observer = [];
    }
    subscribe(fn) {
        this.observer.push(fn);
    }
    emit(message) {
        this.observer.forEach(fn => fn(message))
    }

    unsubscribe(fun) {
        this.observer = this.observer.filter(val => val !== fun)
    }
}

const subject = new Subject;

subject.subscribe(msg => console.log(`Observer A got a message: ${msg}`));

const foo = msg => console.log(`Observer B got a message: ${msg}`);

subject.subscribe(foo);

subject.emit('Hi')
/*Output :
Observer A got a message : Hi
Observer B got a message : Hi
*/
subject.unsubscribe(foo);
subject.emit('Heloo')
/*
Observer A got a message : Heloo

*/
