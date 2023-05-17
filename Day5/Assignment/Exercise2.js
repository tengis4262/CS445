class Subject {
<<<<<<< HEAD
    constructor() {
        this.observers = {};
    }

    on(event, fn) {
        if (!this.observers[event]) {
            this.observers[event] = [];
        }
        this.observers[event].push(fn);
    }

    emit(event, message) {
        const observers = this.observers[event] || [];
        observers.forEach(observer => observer(message));
    }
=======
  constructor() {
    this.observers = {};
  }

  on(event, callback) {
    if (!this.observers[event]) {
      this.observers[event] = [];
    }
    this.observers[event].push(callback);
  }

  emit(event, data) {
    const observers = this.observers[event] || [];
    observers.forEach(observer => observer(data));
  }
>>>>>>> d4215e10114cc87c3c863944e6e37985d94e829d
}



<<<<<<< HEAD



=======
>>>>>>> d4215e10114cc87c3c863944e6e37985d94e829d
const subject = new Subject();
subject.on('eat', console.log); // register an observer
subject.on('study', console.log); // register an observer

function foo(msg) {
<<<<<<< HEAD
    console.log('foo: ' + msg);
=======
  console.log('foo: ' + msg);
>>>>>>> d4215e10114cc87c3c863944e6e37985d94e829d
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
<<<<<<< HEAD
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit('study', 'cs445');
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445
=======
// Output: 
// Corn
// foo: Corn

subject.emit('study', 'cs445');
// Output:
// cs445
// foo: cs445
>>>>>>> d4215e10114cc87c3c863944e6e37985d94e829d
