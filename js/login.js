//根字号初始化
initSize();
function initSize(){
	var  screenW = window.screen.width;
	var oHtml = $("html");
	return	oHtml.css("fontSize",100*screenW/640 + "px");
}
//返回上一页
function goBack(){
	return  window.history.go(-1);
}


function _login(){
	var username = $("#username").val();
	var psw = $('#password').val();
	if(user!=''){
		if(psw!=''){
			  var user = getUser(username,psw);
			  loginData(user);
		}else{
			alert("密码不能为空")
		}
		
	}else{
		alert("用户名不能为空")
	}
}


function getUser(username,psw){
	var user = {
		  userID:username,
		  password:psw 
	}
	return user;
};


$(function(){
	var data = localStorage.getItem("token");
	if(data!=null){
		$("#username").val(JSON.parse(data).userID);
	    $("#password").val(JSON.parse(data).password);
	}
//	console.log(data);
	
});




function loginData(user){
	console.log(user.userID+','+user.password);
	var check = $("#rememb").is(':checked');
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		data:{status:"login",userID:user.userID,password:user.password},
		dataType:"jsonp",
		success:function(data){
			alert('o1111')
			if(data.charAt(0)== "{"){
				if(check){
                    var str = '{"userID":"'+user.userID+'","password":"'+user.password+'"}';
                    console.log(str);
					localStorage.setItem("token",str)
				}
				alert('ok')
				window.location.href='index.html';
				var str1 = '{"userID":"'+user.userID+'"}';
				localStorage.setItem("user",str1)
			}else{
				alert("亲 你的浏览器出现问题了 请更换 状态码229")
			}
			
		}
	});
	
}

