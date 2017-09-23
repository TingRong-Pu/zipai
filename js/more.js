//根字号初始化
initSize();
function initSize(){
	var screenW = window.screen.width;
	var oHtml = $("html");
	return	oHtml.css("fontSize",100*screenW/640 + "px");
}

//返回上一页
function goBack(){
	return  window.history.go(-1);
}


$('.btn').on('tap',function(){
	var userID =JSON.parse(localStorage.getItem("user")).userID;
	localStorage.removeItem('user',userID);
	window.location.href='login.html';
})
