function $(id){
	return document.getElementById(id);
}

var inschool=$("inschool");
var outschool=$('outschool');
var select=$("selec");
var work=$("work");
var area=$("area");
var school=$('school');
//按钮点击事件
inschool.onclick=function(){
   work.style.display="none";
   select.style.display="block";	
}
outschool.onclick=function(){
   select.style.display="none";
   work.style.display="block";
}

var list=[//声明一个容器存放学校
                [
                   '北京大学',
                   '清华大学',
                   '北京电影学院'
               ],
               [
                   '复旦大学',
                   '上海交通大学',
                   '同济大学'
               ],
               [
                   '浙江大学',
                   '浙江理工大学'                   
               ]
    ];
function paint(){  //更新表单
			var str="";
			var arr=list[area.selectedIndex];
			for(var i=0;i<arr.length;i++){
				str+="<option>"+arr[i]+"<\/option>";
			}
			school.innerHTML=str;
		}

area.onclick=function(){
	paint();
}