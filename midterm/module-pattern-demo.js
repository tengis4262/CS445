const counterModule = (function () {
    let counter = 0; //private

    return { //public
        incrementCounter: function () {
            return counter++;
        },
        resetCounter: function () {
            counter = 0;
        }
    }

})();

counterModule.incrementCounter(); //return 1
counterModule.incrementCounter(); //return 2
counterModule.incrementCounter(); //return 3
counterModule.resetCounter();
counterModule.incrementCounter(); //return 1



// function f() {

//     let obj = {
//         x: 1,
//         y: 2,
//         getArea:function() {
//             return this.x * this.y;
//         }
//     };

//     return obj;
// }

// const res = f();