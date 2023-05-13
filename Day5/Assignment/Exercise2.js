class Subject {
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
}



const subject = new Subject();
subject.on('eat', console.log); // register an observer
subject.on('study', console.log); // register an observer

function foo(msg) {
  console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
// Output: 
// Corn
// foo: Corn

subject.emit('study', 'cs445');
// Output:
// cs445
// foo: cs445
