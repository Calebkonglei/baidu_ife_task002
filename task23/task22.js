var time="";
var queue=[];
var target=false;
var text=document.getElementById('txt');

//颜色动画渲染
function changecolor(divroot){
	var length=divroot.length;
	var i=0;
	divroot[i++].style.backgroundColor="blue";
    time=setInterval(function(){
     	if(i<length){
     		divroot[i-1].style.backgroundColor="#fff";
     		if(divroot[i].firstChild.nodeValue==text.value){
		        divroot[i].style.backgroundColor="red";
		        target=false;//如果发现目标值，为false，取消遍历
		        clearInterval(time);
	        }else{
		        divroot[i++].style.backgroundColor="blue";
		        
	        }
    	   
    	}else{
    		divroot[i-1].style.backgroundColor="#fff";
    		clearInterval(time);
    	}
    	
    },1000);
}

//深度优先遍历
function DFS(node){
	if(!(node==null)){
		queue.push(node);
		for(var i=0;i<node.children.length;i++){
			DFS(node.children[i]);
		}
	}
}
//广度优先遍历
var i=0;
function BFS(node){
	if(!(node==null)){
		queue.push(node);
		BFS(node.nextElementSibling);
        node=queue[i++];
		BFS(node.firstElementChild);
	}
}

//初始化
function init(){
	clearInterval(time);
	queue=[];
	var divlist=document.getElementsByTagName('div');
	for(var i=0,l=divlist.length;i<l;i++){
		divlist[i].style.backgroundColor="#fff";
	}

}

var root=document.getElementById('root');
document.getElementById('shendu').onclick=function(){
	init();
	DFS(root);
	changecolor(queue);
}
document.getElementById('guangdu').onclick=function(){
	init();
	BFS(root);
	changecolor(queue);
}