// // 引入event模块
// var events=require('events');
// // 创建event Emitter对象
// var eventEmitter=new events.EventEmitter();



// // 创建对象处理对象
// var connectHandler=function connected(){
//    console.log('连接成功');

//    // 触发data_received事件
//    eventEmitter.emit('data_received');
// }
// // 绑定Conn事件处理程序；
// eventEmitter.on('connection',connectHandler);

// // 绑定data_recev事件
// eventEmitter.on('data_received',function(){
//    console.log('数据接受成功')
// });

// // 触发connect事件
// eventEmitter.emit('connection');
// console.log("程序执行完毕");



// var events = require('events')
// var eventEmitter = new events.EventEmitter()
// // 触发
// eventEmitter.emit('my_event')
// // 绑定
// eventEmitter.on('my_event', () => {
//   console.log('data received succesfully.')
// });

// setTimeout(() => {
//    eventEmitter.emit('some_events')
   
// }, 5000);//5s后触发



// var events = require('events')
// var eventEmitter = new events.EventEmitter()

// setTimeout(() => {
// eventEmitter.emit('my_event','arg1参数','arg2参数');
   
// }, 3000);
// eventEmitter.on('my_event', (arg1,arg2) => {
//    console.log('listen1',arg1,arg1);
// })

// eventEmitter.on('my_event', (arg1,arg2) => {
//    console.log('listen2',arg1,arg2);
// })


var events = require('events')
var eventEmitter = new events.EventEmitter()


// 监听器1
var listen1=function listen(){
   console.log('监听器1的执行');
}


// 监听器2
var listen2=function listen(){
   console.log('监听器2的执行');
}
eventEmitter.emit('my_event')

// 绑定事件
eventEmitter.addListener('connection',listen1)
eventEmitter.on('connection', listen2);



var eventListeners=eventEmitter.listenerCount('connection');
console.log(eventListeners+"个监听器连接事件");

// 处理connection事件
eventEmitter.emit('connection');
// 移出listen1监听事件
eventEmitter.removeListener('connection',listen1);
console.log("listen 1不再受到监听");

// 触发事件
eventEmitter.emit('connection');
//listen2
eventListeners=eventEmitter.listenerCount('connection');
console.log(eventListeners+"个监听器连接事件");
console.log("程序执行完毕");