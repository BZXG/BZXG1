//function feicui1 (a){
//	console.log(a)
//};
//
//function feicui2(a,b){
//	b+="good";
//	a(b)
//};
//feicui2(feicui1,'feicui');

//feicuigood

feicui2中传递了两个参数，一个是a，一个是b,现在a是函数feicui1,b是字符串feicui，带入执行，
b+="good",b="feicuigood",a(b),就是function feicui1 (feicuigood){console.log(feicuigood)}
结果feicuigood

var c=0;
function printIt(){
	console.log(c)
};
function plus(callback){
	setTimeout(function(){
		c+=1;
		callback()
	},0)
	printIt();
	
};

plus(printIt);

//0  1

第一个函数打印出来的就是0；第二个函数调用了第一个函数，c+=1；c=1;所以打印出来的就是1；