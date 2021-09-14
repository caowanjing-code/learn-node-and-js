// var util=require('util');

// function Person(){
//     this.name='boyvvvzzz';
//     this.toString=function(){
//         return this.name;
//     };
// }

// var  obj=new Person();
// console.log(util.inspect(obj));
// console.log(util.inspect(obj,true));


let util = require('util');
function Base() {
        this.name = 'name';
        this.base = 1995;
        this.sayHello = function() {
                console.log('hello ' + this.name);
        }
}

Base.prototype.showName = function() {
        console.log(this.name);
}

function sub() {
        this.name = 'sub';
}

util.inherits(sub, Base);

let baseObj = new Base();
console.log(baseObj);
baseObj.showName();

let subObj = new sub();
console.log(subObj);
console.log(subObj.name);
subObj.showName();
