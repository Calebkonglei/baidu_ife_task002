
//封装一个用于获取节点的函数
function $(id){
	return document.getElementById(id);
}

var area=$('txt');
var input=$('sel');
var btn=document.querySelectorAll("button");
var container=$('container');
var span=container.getElementsByTagName('span');


//处理文本
function txtTarget(str){
   return str.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(d){return d != '';})}
var queue=[];
var evt={ //事件
				
		   shift:function(){ //左侧出
			if(queue.length===0){
				alert("元素已经删空");
				return false;
			}
			alert(queue.shift());
			Event();
			
		},
		pop:function(){  //右侧出			
			if(queue.length===0){
				alert("元素已经删空");
				return false;
			}
			alert(queue.pop());
            evt.render();
		},
		remove:function(num){//删除指定元素
			queue.splice(num,1);
             Event();
		},
		render:function(){   //重绘
			var html=[];
			var len=queue.length;
			for(var i=0;i<len;i++){
				html.push('<span>'+queue[i]+'</span>');
			};
            container.innerHTML=html.join(''); 
            Event();
		}
		
	}
    function Event(){  //元素点击删除事件
		var span=container.getElementsByTagName("span");
		for(var i=0;i<span.length;i++){
              span[i].onclick=function(i) {
                        return function(){
                        	return evt.remove(i)
                        }
                    }(i)
		    }	
		}	
    
    	//左入，
    	btn[0].onclick=function(){
    		if (area.value !== "") {
            var result = txtTarget(area.value);
            for (var i = 0; i < result.length; i++) {
                queue.unshift(result[i]);
                evt.render();
            }
        } else {
            alert("输入不能为空！");
        }
    };
	//右入
	btn[1].onclick=function(){
	if (area.value !== "") {
            var result = txtTarget(area.value);
            for (var i = 0; i < result.length; i++) {
                queue.push(result[i]);
                var span = document.createElement("span");
                span.innerHTML = result[i];
                container.appendChild(span);
            }
        } else {
            alert("输入不能为空！");
        }
    };
		
	btn[2].onclick=function(){evt.shift();};//左出
	btn[3].onclick=function(){evt.pop();};//右出 
	//添加查询事件
	btn[4].onclick=function(){
		var pos,
            i,
            j;
        if (input.value !== "") {
            var find = input.value.replace(/[^\d\u4e00-\u9fa5a-zA-Z]+/g, " ").split(" ");
            for (i = 0, len = find.length; i< len; i++) {
                for (j = 0, l = queue.length; j < l; j++) {
                    pos = queue[j].search(find[i]);
                    if (pos >= 0) {
                        span[j].style.background = "yellow";
                    }
                }
            }
        } else {
            alert("请输入想要查询的内容！");
        }
    }
