const counterModule = (function(){
    var counter = 0; //private
    function incrementCounter(incr){
        counter += incr;
    }

    return {
        incrementCounter: incrementCounter,
        reset: function() {
            counter = 0;
        },
        getCounter: function(){
            return counter;
        }
    }
})();

counterModule.incrementCounter();
counterModule.incrementCounter();
console.log(counterModule.getCounter());



//module pattern - Immdiately executed function expression

console.log('--------------');
{
    let i = 'Hi';
    console.log(i);
}

// function f() {
//     console.log(i);
// }
// f();
