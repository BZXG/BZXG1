//process.nextTick方法指定的回调函数，总是在当前"执行栈"的尾部触发
process.nextTick(function A() {
    console.log(1);
    process.nextTick(function B(){console.log(2);});
});
setTimeout(function timeout() {
    console.log(3);
}, 0);
// 1
// 2
// 3

setTimeout()只是将事件插入了"任务队列"，必须等到当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数
process.nextTick指定的任务总是发生在所有异步任务之前，当前主线程的末尾。
先说1、2的顺序，因为process.nextTick方法就是在尾部触发，所以，先1后2
再说整体的，因为前两句话，可以知道，先执行process.nextTick，再执行setTimeout()