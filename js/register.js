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


function _register(){
	var name = $('#username').val();
	var psw = $("#password").val();
	var repsw = $("#repassword").val();
	
	if(name!=""){
  	  if(psw!=""){
  	  	 if(psw==repsw){
  	  	 	
  	  	 	var user = getUser(name,psw)
  	  	 
  	  	 	registerData(user)
  	  	 }else{
  	  	   alert("两次密码不一致")	
  	  	 }
  	  }else{
  	  	alert("请输入密码")
  	  	
  	  }
  }else{
  	alert("请输入姓名")
  }
}
	
function getUser(userID,password){
	var user = {
		userID:userID,
		password:password
	}
	return user
}

function registerData(user){
//	alert(2)
	console.log(user.userID+"，"+user.password)
	
	//对接接口
	$.ajax({
		type:"post",
		url:" http://datainfo.duapp.com/shopdata/userinfo.php", 
		data:{status:"register",userID:user.userID,password:user.password},
		success:function(data){
			alert(111);
			console.log(data)
			if(data==1){
				
				alert("注册成功")
				window.location.href='login.html';
			}else{
				alert('no');
				alert("err");
			}
		}
	});
	
}
