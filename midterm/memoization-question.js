function f(n){
    if( n == 1){
        return 1;
    } else {
        return n * f(n -1);
    }
}


// const f = (function() {

//     let i = 0;


//     return function(n) {

//         if (n <= 1) {

//             return 1;

//      }

//         i = f(n - 1) + f(n - 2);

//         return i;

//     }

// })();

/**
1) When call f(5), what's the value being returned?
8

2 )When call f(5), does it contain redundant calls? No matter you answer YES or NO, you MUST explain why to get full credit.
Yes, when call f(5), it calls f(3) twice, f(2) 3 times, add more as your want


3) Can we refactor above code using Memoization? No matter you answer YES or NO, you MUST explain why to get full credit.
Yes, because when we make a call with the same input, 
     it always provide the same output, like when we call f(5) many times, it always return 8

*/