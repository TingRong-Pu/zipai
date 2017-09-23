//var myScroll;
//$(function(){
//	initSize();
//	initScroll();
//  getData()
//	let num = 1;
//	document.addEventListener("touchend",()=>{
//		if(myScroll.y>0){
//		$(".probox").empty()
//		getData()
//	  	}
//	  //上拉无限加载
//	  	if(myScroll.y<myScroll.maxScrollY-50){
//	  		num++
//	  	}
//	})
//});
//
////返回上一页
//function goBack(){
//	return  window.history.go(-1);
//}
//
////根字号初始化
//function initSize(){
//	let screenW = window.screen.width;
//	let oHtml = $("html");
//	return	oHtml.css("fontSize",100*screenW/640 + "px");
//}
//
//
////Scorll初始化
//function initScroll(){
//	myScroll = new IScroll("#wrapper",{
//		mouseWheel:true,
//		scrollbars:true
//	})
//}
//
//var userID =JSON.parse(localStorage.getItem('token')).userID;
//
//function getData(){
//	$.ajax({
//		type:"get",
//		dataType:'jsonp',
//		url:"http://datainfo.duapp.com/shopdata/getCar.php",
//	    data:{userID:userID},
//		async:true,
//		success:function(data){
//			console.log(data)
//		var $num = 0;	
//		var $totalprice = 0;
//		var $probox = $('.probox');
//		$.each(data, function(index) {
////			console.log(data)
//			let $product = $(`<li ids="${data[index].goodsID}"><div class="product clearfix"></div></li>`);
//			let $imgBox = $('<div class="img"></div>');
//			let $thisimg = $(`<img src="${data[index].goodsListImg}"/>`)
//			let $details = $(`<div class="details">
//								<p class="over">${data[index].goodsName}</p>
//								<p>${data[index].className}</p>
//								<p>
//									<span >单价  : </span>
//									<span class="price"> ¥  <i>${data[index].price}</i></span>
//								</p>
//							</div>`)
//			let $box=$("<p><span>数量 : </span></p>");
//			let $count = $("<span class='count'><span>");
//			let $reduce = $('<a class="reduce">-</a>');
//			
//			let $input = $(`<input type="text" id="num" value="${data[index].number}"/>`);
////			console.log($input.val())
//          let val =data[index].number;
//          console.log(val);
//          let price = data[index].price;
//          console.log(price)
//			
//			$num += parseInt(val);
//			$totalprice += price* val;
//			var $add = $('<a class="add">+</a>');
//			let $size = $('<a class="size">L</a><a class="delete"></a>');
//			$imgBox.append($thisimg)
//			$count.append($reduce);
//			$count.append($input);
//			$count.append($add);
//			$box.append($count);
//			$details.append($box);
//			$details.append($size);
//			$product.append($imgBox);
//			$product.append($details);
//			$probox.append($product);
//		});
//		console.log($num)
//		console.log($totalprice);
//		myScroll.refresh();
//		$totalPrice = $('#totalPrice');
//		$ProductNum = $('.ProductNum');
//		$ProductNum.text($num);
//		$totalPrice.text($totalprice.toFixed(2));
//		}
//	});
//}
//	//删除商品
// 	$('.probox').on('tap','.delete',function(){
// 		let ids=$(this).parents('li').attr('ids');
// 		let oInput = $(this).parents('li').find("#num");
// 		let val =parseInt(oInput.val());
// 		let $ProductNumVal = $('.ProductNum').html();
// 		let $totalPrice =parseInt($('#totalPrice').html());
// 		let price =parseInt($(this).parents('li').find('.price').find('i').html());
// 		$.ajax({
// 			type:"post",
// 			url:"http://datainfo.duapp.com/shopdata/updatecar.php",
// 			data:{userID:userID,goodsID:ids,number:0},
// 			async:true,
// 			success:function(data){
// 				console.log(data)
// 				console.log('商品删除成功')
// 				$('.ProductNum').html($ProductNumVal-val);
// 				$('#totalPrice').html($totalPrice-val*price);
// 			}
// 		});
// 		$(this).parents('li').remove();
// 	})
//
//   
//   //商品++
//
// 	$('.probox').on('tap','.add',function(){
// 		let ids=$(this).parents('li').attr('ids');
// 		let oInput = $(this).siblings("#num")
// 		let val = oInput.val();
// 		let $ProductNumVal = $('.ProductNum').html();
// 		let $totalPrice =parseInt($('#totalPrice').html());
// 		let price =$(this).parents('li').find('.price').find('i').html();
// 		val++;
// 		console.log(val);
// 		$ProductNumVal++;
// 		oInput.val(val);
// 		console.log(ids);
// 		$ProductNumVal = $('.ProductNum').html($ProductNumVal);
// 		$.ajax({
// 			type:"post",
// 			url:"http://datainfo.duapp.com/shopdata/updatecar.php",
// 			async:true,
// 			data:{userID:userID,goodsID:ids,number:val},
// 			success:function(data){
// 				console.log(data);
// 				$totalPrice +=parseInt(price);
// 				$('#totalPrice').html($totalPrice);
// 			}
// 		});
// 	})
//
//
//   
//    //商品--
//$('.probox').on('tap','.reduce',function(){
//	let ids=$(this).parents('li').attr('ids');
//	let $totalPrice =parseInt($('#totalPrice').html());
//	let oInput = $(this).siblings("#num")
//	let val = oInput.val();
//	let $ProductNumVal = $('.ProductNum').html();
//	let price =$(this).parents('li').find('.price').find('i').html();
//	console.log($ProductNumVal);
//	val--;
//  if(val>=1){
//  	$ProductNumVal--;
//		oInput.val(val);
//		$ProductNumVal = $('.ProductNum').html($ProductNumVal);
//		$.ajax({
//			type:"post",
//			url:"http://datainfo.duapp.com/shopdata/updatecar.php",
//			async:true,
//			data:{userID:userID,goodsID:ids,number:val},
//			success:function(data){
//				console.log(data);
//				$totalPrice -=parseInt(price);
//				$('#totalPrice').html($totalPrice);
//			}
//		})
//  }
//})

"use strict";

var myScroll;
$(function () {
	initSize();
	initScroll();
	getData();
	var num = 1;
	document.addEventListener("touchend", function () {
		if (myScroll.y > 0) {
			$(".probox").empty();
			getData();
		}
		//上拉无限加载
		if (myScroll.y < myScroll.maxScrollY - 50) {
			num++;
		}
	});
});

//返回上一页
function goBack() {
	return window.history.go(-1);
}

//根字号初始化
function initSize() {
	var screenW = window.screen.width;
	var oHtml = $("html");
	return oHtml.css("fontSize", 100 * screenW / 640 + "px");
}

//Scorll初始化
function initScroll() {
	myScroll = new IScroll("#wrapper", {
		mouseWheel: true,
		scrollbars: true
	});
}


function getData() {
	var  storages= JSON.parse(localStorage.getItem('user')); 
	if(storages!=null){
		$.ajax({
			type: "get",
			dataType: 'jsonp',
			url: "http://datainfo.duapp.com/shopdata/getCar.php",
			data: { userID: userID },
			async: true,
			success: function success(data) {
				console.log(data);
				var $num = 0;
				var $totalprice = 0;
				var $probox = $('.probox');
				$.each(data, function (index) {
					//			console.log(data)
					var $product = $("<li ids=\"" + data[index].goodsID + "\"><div class=\"product clearfix\"></div></li>");
					var $imgBox = $('<div class="img"></div>');
					var $thisimg = $("<img src=\"" + data[index].goodsListImg + "\"/>");
					var $details = $("<div class=\"details\">\n\t\t\t\t\t\t\t\t<p class=\"over\">" + data[index].goodsName + "</p>\n\t\t\t\t\t\t\t\t<p>" + data[index].className + "</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<span >单价  : </span>\n\t\t\t\t\t\t\t\t\t<span class=\"price\"> ¥  <i>" + data[index].price + "</i></span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>");
					var $box = $("<p><span>数量 : </span></p>");
					var $count = $("<span class='count'><span>");
					var $reduce = $('<a class="reduce">-</a>');
	
					var $input = $("<input type=\"text\" id=\"num\" value=\"" + data[index].number + "\"/>");
					//			console.log($input.val())
					var val = data[index].number;
					console.log(val);
					var price = data[index].price;
					console.log(price);
	
					$num += parseInt(val);
					$totalprice += price * val;
					var $add = $('<a class="add">+</a>');
					var $size = $('<a class="size">L</a><a class="delete"></a>');
					$imgBox.append($thisimg);
					$count.append($reduce);
					$count.append($input);
					$count.append($add);
					$box.append($count);
					$details.append($box);
					$details.append($size);
					$product.append($imgBox);
					$product.append($details);
					$probox.append($product);
				});
				console.log($num);
				console.log($totalprice);
				myScroll.refresh();
				$totalPrice = $('#totalPrice');
				$ProductNum = $('.ProductNum');
				$ProductNum.text($num);
				$totalPrice.text($totalprice.toFixed(2));
			}
		});
	}
	
}
//删除商品
$('.probox').on('tap', '.delete', function () {
	var ids = $(this).parents('li').attr('ids');
	var oInput = $(this).parents('li').find("#num");
	var val = parseInt(oInput.val());
	var $ProductNumVal = $('.ProductNum').html();
	var $totalPrice = parseInt($('#totalPrice').html());
	var price = parseInt($(this).parents('li').find('.price').find('i').html());
	$.ajax({
		type: "post",
		url: "http://datainfo.duapp.com/shopdata/updatecar.php",
		data: { userID: userID, goodsID: ids, number: 0 },
		async: true,
		success: function success(data) {
			console.log(data);
			console.log('商品删除成功');
			$('.ProductNum').html($ProductNumVal - val);
			$('#totalPrice').html($totalPrice - val * price);
		}
	});
	$(this).parents('li').remove();
});

//商品++

$('.probox').on('tap', '.add', function () {
	var ids = $(this).parents('li').attr('ids');
	var oInput = $(this).siblings("#num");
	var val = oInput.val();
	var $ProductNumVal = $('.ProductNum').html();
	var $totalPrice = parseInt($('#totalPrice').html());
	var price = $(this).parents('li').find('.price').find('i').html();
	val++;
	console.log(val);
	$ProductNumVal++;
	oInput.val(val);
	console.log(ids);
	$ProductNumVal = $('.ProductNum').html($ProductNumVal);
	$.ajax({
		type: "post",
		url: "http://datainfo.duapp.com/shopdata/updatecar.php",
		async: true,
		data: { userID: userID, goodsID: ids, number: val },
		success: function success(data) {
			console.log(data);
			$totalPrice += parseInt(price);
			$('#totalPrice').html($totalPrice);
		}
	});
});

//商品--
$('.probox').on('tap', '.reduce', function () {
	var ids = $(this).parents('li').attr('ids');
	var $totalPrice = parseInt($('#totalPrice').html());
	var oInput = $(this).siblings("#num");
	var val = oInput.val();
	var $ProductNumVal = $('.ProductNum').html();
	var price = $(this).parents('li').find('.price').find('i').html();
	console.log($ProductNumVal);
	val--;
	if (val >= 1) {
		$ProductNumVal--;
		oInput.val(val);
		$ProductNumVal = $('.ProductNum').html($ProductNumVal);
		$.ajax({
			type: "post",
			url: "http://datainfo.duapp.com/shopdata/updatecar.php",
			async: true,
			data: { userID: userID, goodsID: ids, number: val },
			success: function success(data) {
				console.log(data);
				$totalPrice -= parseInt(price);
				$('#totalPrice').html($totalPrice);
			}
		});
	}
});