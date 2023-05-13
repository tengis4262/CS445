class Subject {
    constructor(){
        this.observerList = [];
    }

    subscribe(observer) {
        this.observerList.push(observer);
    }

    notify(msg){
        this.observerList.forEach(fn => fn(msg));
    }

    unsubscribe(obsever){
        // this.observerList = this.observerList.filter(ob => ob !== obsever);
        const index = this.observerList.indexOf(obsever);
        this.observerList.splice(index, 1);
    }
}

const amazon = new Subject();

//observer -> a function
function ob1(msg){
    console.log('Observer 1 is being notified, ' + msg);
}
amazon.subscribe(ob1);
// amazon.notify();

function ob2(msg){
    console.log('Observer 2 is being notified, ' + msg);
}
amazon.subscribe(ob2);
amazon.notify('May Promotion, 50%');

amazon.unsubscribe(ob1);
amazon.notify('clearance sale, 80%')
