const counterModule = (function() {
    let counter = 0;
    return {
        incrementCounter: function() {
            return counter++;
        },
        resetCounter: function() {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
        }
    };
})();

counterModule.incrementCounter();
counterModule.resetCounter();


const countMod = (()=>{
    let counter = 0;
    const incrementCounter = ()=>{
        return counter++;
    };
    const resetCounter = ()=>{
        counter = 0;
    }
    return {
        incrementCounter,
        resetCounter
    }
})();