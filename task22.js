   
var time="";
var stack=[];
var changecolor=function(divroot){
	var length=divroot.length;//获取树的深度
	var i=0;
	divroot[i++].style.backgroundColor="blue";
    time=setInterval(function(){
       if(i<length){//判断是否已经遍历完节点
       	divroot[i-1].style.backgroundColor = '#fff';
       	divroot[i].style.backgroundColor="blue";
       	i++;
       }else{
       	clearInterval(time);
        divroot[i-1].style.backgroundColor='#fff';
       }
       
    },1000);
};


//先序遍历算法
function preOrder(node){
	if(!(node == null)){
		stack.push(node);
        postOrder(node.firstElementChild);			
	    postOrder(node.lastElementChild);
	};
};
//中序
function inOrder(node){
	if(!(node == null)){
        inOrder(node.firstElementChild);
 		stack.push(node)       			
	    inOrder(node.lastElementChild);
	};
};
//后序
function postOrder(node){
	if(!(node == null)){
        postOrder(node.firstElementChild);			
	    postOrder(node.lastElementChild);
		stack.push(node);
	};
};

//每次点击内容初始化
function reset(){
	clearInterval(time);
	stack=[];
	var divlist=document.getElementsByTagName('div');
	for(var i=0,l=divlist.length;i<l;i++){
		divlist[i].style.backgroundColor='#fff';
	}
}
//点击事件
var root=document.getElementById('root');

    document.getElementById('pre').onclick=function(){
    	reset();
		preOrder(root);
		changecolor(stack);
	}
	document.getElementById('mid').onclick=function(){
		reset();
		inOrder(root);
		changecolor(stack);
	}
	document.getElementById('post').onclick=function(){
		reset();
		postOrder(root);
		changecolor(stack);
	}

