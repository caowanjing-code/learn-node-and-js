// const util=require('util')

// async function fn(){
//     return 'hello world';
// }
// const callbackFunction=util.callbackify(fn);
// callbackFunction((err,ret)=>{
//     if(err)throw err;
//     console.log(ret);
// });


// function fn(){
//     return Promise.reject(null);
// }

// const callbackFunction=util.callbackify(fn);

// callbackFunction((err,ret)=>{
//     err&&err.hasOwnProperty('reason')&&err.reason==null;
// });


var util=require('util');
function Base(){
    this.name='base';
    this.Base=1999;
    this.sayHello=function(){
        console.log('hello'+this.name);//hellobase
    };
}
Base.prototype.showName=function(){
    console.log(this.name);//Base { name: 'base', Base: 1999, sayHello: [Function (anonymous)] }
};
function Sub(){
    this.name='sub';
}
util.inherits(Sub,Base);
var objBase=new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);//base
var objSub=new Sub();
objBase.showName();
console.log(objSub);//Sub { name: 'sub' }