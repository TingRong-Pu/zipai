var myScroll;
$(function(){
	initSize();
	initScroll();
//	getData(1);
	let num = 1;
	document.addEventListener("touchend",()=>{
		if(myScroll.y>0){
  		$(".probox").empty()
//		getData(1)
	  	}
	  //上拉无限加载
	  	if(myScroll.y<myScroll.maxScrollY-50){
	  		num++
//	  	   getData(num)	
	  	}
	})
});

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



//Scorll初始化
function initScroll(){
	myScroll = new IScroll("#wrapper",{
		mouseWheel:true,
		scrollbars:true
	})
}


function getData(id){
	$.ajax({
		type:"get",
		dataType:'jsonp',
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		data:{'classID':id},
		success:function(data){
		var $probox = $('.probox');
		var str = '';
//		console.log(data.length)
		$.each(data, function(index) {
			str+=`<li>
				<div class="product clearfix">
					<div class="img"><a href="#"><img src="${data[index].goodsListImg}" alt="${data[index].goodsName}" /></a></div>
					<div class="details">
						<p class="over">${data[index].goodsName}</p>
						<p>
							<span class="price">¥<b>${data[index].price}</b></span>
							<span class="original-price">¥ <i>${data[index].price}</i></span>
						</p>
						<p><i class="discount">${data[index].discount}</i>折</p>
						<button id="joincart"></button>
					</div>
				</div>
			</li>`;
		});
		$probox.append(str);
		myScroll.refresh();
		}
	});
}
