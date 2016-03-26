    
    var container=document.getElementById("container");
	var evt={ //事件
		queue:[],
		unshift:function(num){ //左侧入
			evt.queue.unshift(num);
			evt.render();
		},
		push:function(num){ //右侧入  
			evt.queue.push(num);
			evt.render();
		},		
		shift:function(){ //左侧出
			if(evt.queue.length===0){
				alert("元素已经删空");
				return false;
			}
			alert(evt.queue.shift());
			evt.render();
		},
		pop:function(){  //右侧出			
			if(evt.queue.length===0){
				alert("元素已经删空");
				return false;
			}
			alert(evt.queue.pop());
			evt.render();
		},
		remove:function(num){//删除指定元素
			evt.queue.splice(num,1);
			evt.render();
		},
		render:function(){   //重绘
			var html=[];
			var len=evt.queue.length;
			for(var i=0;i<len;i++){
				html.push('<span>'+evt.queue[i]+'</span>');
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

	var data=document.getElementById("txt");
	var btn=document.querySelectorAll("button");
	//左入，
	btn[1].onclick=function(){
		var num=data.value;
		if(!(/^\d+$/.test(num))){
			alert("请输入正确的整数！");
		}
		else evt.push(num);
	}
	
	btn[0].onclick=function(){
		var num=data.value;
		if(!(/^\d+$/.test(num))){
			alert("请输入正确的整数！");
		}
		else evt.unshift(num);
	}
	btn[2].onclick=function(){evt.shift();};
	btn[3].onclick=function(){evt.pop();};
    
