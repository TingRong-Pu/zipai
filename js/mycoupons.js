
$(function(){
	initSize();
})
//返回上一页
function goBack(){
	return  window.history.go(-1);
}

//根字号初始化
function initSize(){
	let screenW = window.screen.width;
	let oHtml = $("html");
	return	oHtml.css("fontSize",100*screenW/640 + "px");
}

