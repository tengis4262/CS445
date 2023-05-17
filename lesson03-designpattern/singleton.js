const Singleton = (function() {
    let instance;

    return {
        getInstance: function() {
            if (!instance) {
                instance = new Object("I am the instance");
            }
            return instance;
        }
    };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log("Same instance? " + (instance1 === instance2));