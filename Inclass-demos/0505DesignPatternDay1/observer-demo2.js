class Subject {

    constructor(){
        this.observerList = [];
    }

    subscribe(observer) {
        this.observerList.push(observer);
    }

    notify(msg) {
        this.observerList.forEach(ob => ob.next(msg));
    }

}

const amazon = new Subject();

amazon.subscribe({
    name: 'Observer 1',
    next: function(msg) {
        console.log(`${this.name} is being notified, ${msg}`)
    }
});

amazon.subscribe({
    name: 'Observer 2',
    next: function(msg) {
        console.log(`${this.name} is being notified, ${msg}`)
    }
});

amazon.notify('50%');
//Observer 1 is being notified, 50%
//Observer 2 is being notified, 50%
