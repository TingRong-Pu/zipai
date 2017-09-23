//根字号初始化
function initSize(){
	var  screenW = window.screen.width;
	var  oHtml = $("html");
	return	oHtml.css("fontSize",100*screenW/640 + "px");
}
$(function(){
	initSize();
})

//返回上一页
function goBack(){
	return  window.history.go(-1);
}


var  storages= JSON.parse(localStorage.getItem('user')); 
if(storages!=null){
	 var userID= storages.userID;
	 $("#username").html(userID);
	 $('.btn').hide();
}
//console.log(userID);
//if(userID){
//	$("#username").html(userID);
//	$('.btn').hide();
//}

