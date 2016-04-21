function addEventHandler(ele,event,handler){
	if(ele.addEventHandler){
		ele.addEventListener(event,handler,false);
	}else if(ele.attachEvent){
		ele.attachEvent('on'+event,handler);
	}else{
		ele["on"+event]=handler;
	}
}

function $(id){
	return document.getElementById(id);
}
var tagInput=$('tag_input'),
    tagList=$('tag_list'),
    hobbyInput=$('hobby_input'),
    hobbyList=$('hobby_list'),
    hobbyBtn=$('btn');

//实例化对象
var tagObj=new CreatList(tagList),
    hobbyObj=new CreatList(hobbyList);
//事件绑定
addEventHandler(tagInput,'keyup',showTag);
addEventHandler(hobbyBtn,'click',showHobby);

addEventHandler(tagList,'mouseover',function(e){
    if(e.target&&e.target.nodeName=="SPAN"){
    	e.target.firstChild.insertData(0,'点击删除');
    	e.target.style.background="red";
    }
});
addEventHandler(tagList,'mouseout',function(e){
	e.target.firstChild.deleteData(0,4);
	e.target.style.background="#78BCFB";
});
addEventHandler(tagList,'click',function(e){
	if(e.target&&e.target.nodeName=="SPAN"){
		tagList.removeChild(e.target);
	}
});

function CreatList(divlist){
	this.queue=[];
	this.render=function(){
		var str="";
		this.queue.forEach(function(e){
			str+='<span>'+e+'</span>';
		});
		divlist.innerHTML=str;
	}
};

CreatList.prototype.rightPush=function(str){
	this.queue.push(str);
	this.render();
};
CreatList.prototype.leftshift=function(str){
	this.queue.shift(str);
	this.render();
};
//处理输入的内容
function splitInput(str){
	var inputArray=str.trim().split(/[,，;；、。.\s\n]+/);
	return inputArray;
}

function showTag(){
	if(/[,，;；、\s\n]+/.test(tagInput.value)||event.keyCode==13){
		var data=splitInput(tagInput.value);
		var newTag=data[0];
		if(tagObj.queue.indexOf(newTag)===-1){
			tagObj.rightPush(newTag);
			if(tagObj.queue.length>10){
				tagObj.leftshift();
			}
		}
		tagObj.render();
		tagInput.value="";
	}
}

function showHobby(){
	var data=splitInput(hobbyInput.value);
	data.forEach(function(e){
		if(hobbyObj.queue.indexOf(e)===-1){
		hobbyObj.rightPush(e);
		if(hobbyObj.queue.length>10){
			hobbyObj.leftshift();
		}
	}
	hobbyObj.render();
	hobbyInput.value="";
});
}
