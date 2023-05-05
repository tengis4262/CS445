class Subject {
    constructor() {
        this.subList = []
    }

    subscribe(observer){
        this.subList.push(observer);
    }
    notify(msg){
        this.subList.forEach(ob =>ob.next(msg))
    }

}

const amazon = new Subject();

amazon.subscribe({
    name: 'Observer 1',
    next: function (msg) {
        console.log(`${this.name} is being notified, ${msg}`)
    }
});

amazon.subscribe({
    name: 'Observer 2',
    next: function (msg) {
        console.log(`${this.name} is being notified, ${msg}`)
    }
});

amazon.notify('50%');
//Observer 1 is being notified, 50%
//Observer 2 is being notified, 50%