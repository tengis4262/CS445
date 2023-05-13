//define varibales
//1.  use const by default
//2. if the variable value can be changed, change to use let
//3. Don't use var if you're not 100% clear about what you're doing

'use strict';
function foo(){
    // i = 'global'; //implied global
    var i = 'function scope';
    console.log(i);
    return function(){
        console.log('888888888888');
    }
}


setTimeout(foo(), 1000); // setTimeout(undefined, 1000);

class Address {

}

class Student {
    constructor(firstname, lastname, address){
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = this.address
    }
}