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

feicui2�д���������������һ����a��һ����b,����a�Ǻ���feicui1,b���ַ���feicui������ִ�У�
b+="good",b="feicuigood",a(b),����function feicui1 (feicuigood){console.log(feicuigood)}
���feicuigood

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

��һ��������ӡ�����ľ���0���ڶ������������˵�һ��������c+=1��c=1;���Դ�ӡ�����ľ���1��