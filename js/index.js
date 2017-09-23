//var myScroll;
//$(function(){
//	initSize()
//	initSwiper();
//	initScroll();
//	getBanner();
//	getData(1);
//	let num = 1;
//	document.addEventListener("touchend",()=>{
//		if(myScroll.y>0){
//		$(".probox").empty()
//		getData(1)
//	  	}
//	  //上拉无限加载
//	  	if(myScroll.y<myScroll.maxScrollY-50){
//	  		num++
//	  	   getData(num)	
//	  	}
//	})
//});
//
////根字号初始化
//function initSize(){
//	let screenW = window.screen.width;
//	let oHtml = $("html");
//	return	oHtml.css("fontSize",100*screenW/640 + "px");
//}
//
////Swiper初始化
//function initSwiper(){
//	let swiper = new Swiper(".swiper-container",{
//		autoplay:2000,
//		pagination:".swiper-pagination",
//		paginationClickable:true
//	})	
//}
////Scorll初始化
//function initScroll(){
//	myScroll = new IScroll("#wrapper",{
//		mouseWheel:true,
//		scrollbars:true
//	})
//}
//
//function getBanner(){
//	$.ajax({
//		type:"get",
//		url:"http://datainfo.duapp.com/shopdata/getBanner.php",
//		async:true,
//		dataType:'jsonp',
//		success:function(data){
//			let $swiperWrapper = $('.swiper-wrapper');
//			$.each(data, function(index) {
//				console.log(JSON.parse(data[index].goodsBenUrl)[0]);
//				let $swiperslide = $(`<div class="swiper-slide">图片加载中.....</div>`);
//				let $thisimg = $(`<img src="${JSON.parse(data[index].goodsBenUrl)[0]}" width="100%" height='100%'/>`)
//				$thisimg.on("load",function(){
//					$swiperslide.empty();
//					$swiperslide.append($thisimg);
//					initSwiper();
//				})
//				$swiperWrapper.append($swiperslide);
//			});
//			
//		}	
//	});
//}
////获取用户名
//var userID =JSON.parse(localStorage.getItem('token')).userID;
//function getData(id){
//	$.ajax({
//		type:"get",
//		dataType:'jsonp',
//		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
//		data:{'classID':id},
//		success:function(data){
//			console.log(data)
//		var $probox = $('.probox');
//		$.each(data, function(index) {
//			let $product = $("<li><div class='product clearfix'></div></li>");	
//			let $imgBox = $("<div class='img'></div>");
//			let $thisimg = $(`<img src="${data[index].goodsListImg}" alt="${data[index].goodsName}" />`)
//			let $details = $(`<div class="details">
//						<p class="over">${data[index].goodsName}</p>
//						<p>
//							<span class="price">¥<b>${data[index].price}</b></span>
//							<span class="original-price">¥ <i>${data[index].price}</i></span>
//						</p>
//						<p><i class="discount">${data[index].discount}</i>折</p>
//						
//					</div>`)
//			$joinCart = $("<button></button>");
//			$thisimg.on("load",function(){
//					$imgBox.empty()
//					$imgBox.append($thisimg)
//					myScroll.refresh()
//				})
//				$thisimg.on("touchstart",function(){
//					window.location.href="details.html?goodsID="+encodeURI(data[index].goodsID);
//				})
//				let count = 0;
//			$joinCart.on("touchstart",function(){
//				console.log(data[index].goodsID);
//				count++;
//				$.ajax({
////					console.log(data[index].goodsID);
//	     			type:"post",
//	     			url:" http://datainfo.duapp.com/shopdata/updatecar.php",
//	     			async:true,
//	     			data:{userID:userID,goodsID:data[index].goodsID,number:count},
//	     			success:function(data){
//	     				alert('加入购物车成功')
//	     			}
//	     		});
//
//			})
//			$imgBox.append($thisimg);
//			$product.append($imgBox);
//			$details.append($joinCart);
//			$product.append($details);
//			$probox.append($product);
//		});
//		
//		}
//	});
//}
//
//
//
//
//
//
//
//
//
"use strict";

var myScroll;
$(function () {
	initSize();
	initSwiper();
	initScroll();
	getBanner();
	getData(1);
	var num = 1;
	document.addEventListener("touchend", function () {
		if (myScroll.y > 0) {
			$(".probox").empty();
			getData(1);
		}
		//上拉无限加载
		if (myScroll.y < myScroll.maxScrollY - 50) {
			num++;
			getData(num);
		}
	});
});

//根字号初始化
function initSize() {
	var screenW = window.screen.width;
	var oHtml = $("html");
	return oHtml.css("fontSize", 100 * screenW / 640 + "px");
}

//Swiper初始化
function initSwiper() {
	var swiper = new Swiper(".swiper-container", {
		autoplay: 2000,
		pagination: ".swiper-pagination",
		paginationClickable: true
	});
}
//Scorll初始化
function initScroll() {
	myScroll = new IScroll("#wrapper", {
		mouseWheel: true,
		scrollbars: true
	});
}

function getBanner() {
	$.ajax({
		type: "get",
		url: "http://datainfo.duapp.com/shopdata/getBanner.php",
		async: true,
		dataType: 'jsonp',
		success: function success(data) {
			var $swiperWrapper = $('.swiper-wrapper');
			$.each(data, function (index) {
				console.log(JSON.parse(data[index].goodsBenUrl)[0]);
				var $swiperslide = $("<div class=\"swiper-slide\">图片加载中.....</div>");
				var $thisimg = $("<img src=\"" + JSON.parse(data[index].goodsBenUrl)[0] + "\" width=\"100%\" height='100%'/>");
				$thisimg.on("load", function () {
					$swiperslide.empty();
					$swiperslide.append($thisimg);
					initSwiper();
				});
				$swiperWrapper.append($swiperslide);
			});
		}
	});
};


function getData(id) {
	$.ajax({
		type: "get",
		dataType: 'jsonp',
		url: "http://datainfo.duapp.com/shopdata/getGoods.php",
		data: { 'classID': id },
		success: function success(data) {
			console.log(data);
			var $probox = $('.probox');
			$.each(data, function (index) {
				var $product = $("<li><div class='product clearfix'></div></li>");
				var $imgBox = $("<div class='img'></div>");
				var $thisimg = $("<img src=\"" + data[index].goodsListImg + "\" alt=\"" + data[index].goodsName + "\" />");
				var $details = $("<div class=\"details\">\n\t\t\t\t\t\t<p class=\"over\">" + data[index].goodsName + "</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<span class=\"price\">¥<b>" + data[index].price + "</b></span>\n\t\t\t\t\t\t\t<span class=\"original-price\">¥ <i>" + data[index].price + "</i></span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p><i class=\"discount\">" + data[index].discount + "</i>折</p>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>");
				var $joinCart = $("<button></button>");
				$thisimg.on("load", function () {
					$imgBox.empty();
					$imgBox.append($thisimg);
					myScroll.refresh();
				});
				$thisimg.on("touchstart", function () {
					window.location.href = "details.html?goodsID=" + encodeURI(data[index].goodsID);
				});
				var count = 0;
				$joinCart.on("touchstart", function () {
					//获取用户名
					var  storages= JSON.parse(localStorage.getItem('user')); 
					if(storages!=null){
						 var userID= storages.userID;
						 console.log(userID);
						 console.log(data[index].goodsID);
						count++;
						$.ajax({
							type: "post",
							url: " http://datainfo.duapp.com/shopdata/updatecar.php",
							async: true,
							data: { userID: userID, goodsID: data[index].goodsID, number: count },
							success: function success(data) {
								alert('加入购物车成功');
							}
						});
					}
					else{
						alert('亲 ，请先登录')
					}
				});
				$imgBox.append($thisimg);
				$product.append($imgBox);
				$details.append($joinCart);
				$product.append($details);
				$probox.append($product);
			});
		}
	});
}
