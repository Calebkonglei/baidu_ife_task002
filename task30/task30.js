function $(id){
	return document.getElementById(id);
}

var username=$('names');
var password=$('password');
var passwordTwo=$('password-again');
var email=$('email');
var phonenumber=$('phonenumber');
var submit=$('submit');
var span=document.querySelectorAll('span');
var passwordright=false;
var passwordvalue="";
//对表格内容进行判断
var check=(function(){
    return {checkUsername:function(values){
    	     var str=0;
    	     if(values==="")
    	     	return "姓名不能为空";
    	     else {
    	     	for(var i=0,l=values.length;i<l;i++){
    	     		var c=values.charCodeAt('i');
                    if((c>=0x0001&&c<=0x007e)||(0xff60<=c&&c<=0xff9f))
                    	str++;
                    else str+=2;
    	     	}
    	     	if(str<4||str>16)
    	     		return "请输入字符数为4~16范围内，每个汉字占两个字符";
    	     	else return "格式正确";
    	     }
        },
        checkPassword:function(values){
        	var count=values.length;
        	passwordright=false;
        	if(values==="")
        		return "密码不能为空";
        	else if(/[^0-9a-z]/gi.test(values))
        		return "密码只能为字母或数字，不能为其它字符";
        	else{
        		if(count<9||count>24)
        			return "密码字符数只能在9~24范围内";
        		else {
        			passwordright=true;
                    passwordvalue=values;
                    return "格式正确";
        		}
        	}
        },
        checkPasswordTwo:function(values){
        	if(passwordright){
        		if(values===passwordvalue)
        			return "格式正确";
        		else return "两次密码输入不一致";
        	}
        	else return "请先输入密码，在确认密码";
        },
        checkemail:function(values){
        	if(values==="") 
        		return "邮箱不能为空";
        	else if(/^[\w]+@([a-z0-9]+\.)+[a-z0-9]{2,4}$/i.test(values))
        		return "邮箱可用";
        	else return "邮箱格式不正确";
        },
        checkphone:function(values){
        	if(values==="")
        		return "手机号不能为空";
        	else if(/^\d{11}$/.test(values)) 
        		return "手机号可用";
        	else return "手机号格式错误";
        }
    }
})();

function focusinput(input,txt){
	input.style.borderColor="#ccc";
	txt.style.color="#aaa";
}
//姓名
addEvent(username,"focus",function(){
   span[0].innerHTML="必填，长度为4~18个字符，只允许输入中文、英文字母和数字,中文占2字符";
   focusinput(username,span[0]);
});
addEvent(username,"blur",function(){
   span[0].innerHTML=check.checkUsername(username.value);
   var values=span[0].innerHTML;
   if(values=="格式正确"){
   	username.style.borderColor="blue";
    span[0].style.color="blue";   	
}else{
	username.style.borderColor="red";
    span[0].style.color="red";
}

});
//密码
addEvent(password,"focus",function(){
   span[1].innerHTML="必填，长度为9~24个字符，只允许输入英文字母和数字";
   focusinput(password,span[1]);
});
addEvent(password,"blur",function(){
   span[1].innerHTML=check.checkPassword(password.value);
   var values=span[1].innerHTML;
   if(values=="格式正确"){
   	password.style.borderColor="blue";
    span[1].style.color="blue";   	
}else{
	password.style.borderColor="red";
    span[1].style.color="red";
}

});
 //确认密码
addEvent(passwordTwo,"focus",function(){
   span[2].innerHTML="需与上面密码一致";
   focusinput(passwordTwo,span[2]);
});
addEvent(passwordTwo,"blur",function(){
   span[2].innerHTML=check.checkPasswordTwo(passwordTwo.value);
   var values=span[2].innerHTML;
   if(values=="格式正确"){
   	passwordTwo.style.borderColor="blue";
    span[2].style.color="blue";   	
}else{
	passwordTwo.style.borderColor="red";
    span[2].style.color="red";
}

});
//邮箱
addEvent(email,"focus",function(){
   span[3].innerHTML="必填，邮箱格式为xxx@xx.xx";
   focusinput(email,span[3]);
});
addEvent(email,"blur",function(){
   span[3].innerHTML=check.checkemail(email.value);
   var values=span[3].innerHTML;
   if(values=="邮箱可用"){
   	email.style.borderColor="blue";
    span[3].style.color="blue";   	
}else{
	email.style.borderColor="red";
    span[3].style.color="red";
}
});
//手机
addEvent(phonenumber,"focus",function(){
   span[4].innerHTML="必填，长度为11个字符，只能为数字";
   focusinput(phonenumber,span[4]);
});
addEvent(phonenumber,"blur",function(){
   span[4].innerHTML=check.checkphone(phonenumber.value);
   var values=span[4].innerHTML;
   if(values=="手机号可用"){
   	phonenumber.style.borderColor="blue";
    span[4].style.color="blue";   	
}else{
	phonenumber.style.borderColor="red";
    span[4].style.color="red";
}


});
//提交事件
var input=document.querySelectorAll('input');
var inputColor=input.borderColor;
addEvent(submit,"click",function(){
 if(inputColor=="blue"){
   	alert("注册成功");
   }else
   	alert("注册信息有误");
   
}
);

 function addEvent(ele,type,fuc){
 	if(ele.addEventListener){
 		ele.addEventListener(type,fuc);
 	}
 	else if(ele.attachEvent){
 		ele.attachEvent(type,fuc);
 	}
 	else {
 		ele["on"+type]=fuc;
 	}
 }    