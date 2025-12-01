# React
```
Banu Prakash C
Full Stack Architect,
Co-founder Lucida Technologies Pvt Ltd.,
Corporate Trainer,
Emails: banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/GITAM

Softwares Required:
Visual Studio Code.
Chrome Web Browser
NodeJS Latest LTS

node --version
```
Functional style of Programming.

1) High Order Functions [HOF]
* treat functions as first class members [primitive or object]
a) function can accept function as argument
b) function can return a function

goal of HOF: Open Close Principle - SOLID Design Principle
Open Close Principle: closed for change, but open for extension

```
    // action will be a function
    // OCP
   function forEach(items, action) {
    for(let i = 0; i < items.length; i ++) {
        action(items[i]);
    }
   }

   let numbers = [5,7,11,4,77,11];

   forEach(numbers, console.log);
   forEach(numbers, alert);
```
https://rxmarbles.com/

Commonly used HOF:
1) forEach -> iterate and perform action on each element
2) filter -> to get subset
3) map -> transform data
4) reduce -> aggregate

=====

HOF : function can return a function --> Closure
Closure: returned function can access all the members of outer function.

Memoization is a computer programming optimization technique that speeds up a program by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

=============

ES2015 - ES6 version of JavaScript

1) introduced block level members using let and const
let and const --> no hoisting

with var:
```
    var g = 100;
    function doTask(){
        console.log(this);
        var a = 10;
        if(g > a) {
            var b = 20;
            c = 30;
        }
        console.log(g, a, b, c);
    }
    doTask();
```

adding 
'use strict' to JS file, global hoisting is prevented and "this" context is not passed on to the function -> results in undefined while using "this"

2) Template string -> look into hof toCard() ``
3) Promise API, to execute async code on Micro Task Queue on a seperate thread

```
console.log("Hello!!!");
setTimeout(function timed1() {
    console.log("t1")
},0);

setTimeout(function timed2() {
    console.log("t2")
},0);
function somePromiseTask() {
            return new Promise(function (resolve, reject) {   
                    resolve("Get your Data!!");
            });
 }
// Non blocking code
somePromiseTask().then(
    function resolved(data) {
                console.log("Data Resolved ", data);
    },
    function rejected(err){
                console.log("Boom :-(", err);
    }
);

console.log("Another Task!!!");
console.log("Bye!!!");
```


Event Loop

tick

Thread

