
//返回上一页
function goBack(){
	return  window.history.go(-1);
}

var myScroll;
var swiper;
$(function(){
	var goodsID = queryStringUrl("goodsID");
	console.log(goodsID);
	getDetailData(goodsID);
	initSize();
	initSwiper();
	initScroll();
});
//  通过这个方法来获取goodID    页面间的数据传参
function queryStringUrl(name){
	console.log(name);
	var req = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(req);
	if(r!=null){
		console.log(r);
		return decodeURI(r[2])
	}
	return null;	
}

function getDetailData(goodsID){
	$.ajax({
		type:"get",
		url:" http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
		async:true,
		data:{goodsID:goodsID},
		success:function(data){
			var data = eval(data)
			console.log(data);
			var $thisdata = JSON.parse(data[0].imgsUrl);
			console.log($thisdata);
			var $swiperWrapper  = $('#swiperWrapper');
			$.each($thisdata, function(index) {
				var $swiperSlide =  $("<div class='swiper-slide'>图片加载中</div>")
				var $thisimg = $("<img src='"+$thisdata[index]+"' width='100%' />")
				$thisimg.on('load',function(){
					$swiperSlide.empty();
					$swiperSlide.append($thisimg);
				})
				 $swiperSlide.append($thisimg);
				 $swiperWrapper.append($swiperSlide);
			});
			initSwiper();	
			var str ='';	
			str+=`<div class="rec-t">
						<div class="imgbox">
							<img src="${data[0].goodsListImg}"/>
						</div>
					</div>
					<div class="details_title">
						<p class="over"></i>¥<span class="current_price">${data[0].price}</span>${data[0].goodsName}</p>
					</div>
					<div class="market">
						<p>
							<span>市场价：<em>¥<i>${data[0].price}</i></em></span>
							<span><i>${data[0].discount}</i>折</span>
							<span><i>${data[0].buynumber}</i>人购买</span>
						</p>
					</div>`;
			let  $recommend = $('.recommend');
			$recommend.append(str);

			let $product_detail = $('.product_detail');
			let $box = $(`<div></div>`); 
			let $brand =$(`<div class="brand"></div>`);
			let $p = $(`<p>${data[0].detail}</p>`);
			let  $datas = JSON.parse(data[0].goodsBenUrl)
			let $thisimg = '';
			$.each($datas,function(index){	
				console.log($datas[index]);
				  $thisimg += `<img src="${$datas[index]}"/>`;
			})
			$brand.append($thisimg);
			$box.append($brand);
			$box.append($p);
			$product_detail.append($box);
			initScroll();							
		}

	});
	
}



function goBlack(){
	window.history.go(-1);
}

function initSize(){
	let screenW = window.screen.width;
	let oHtml = $("html");
	return	oHtml.css("fontSize",100*screenW/640 + "px");
}

//Scroll初始化
function initScroll(){
	myScroll = new IScroll(".product_detail",{
		mouseWheel:true,
		scrollbars:true
	})
}
//Swiper初始化
function initSwiper(){
	 swiper = new Swiper(".swiper-container",{
		autoplay:2000,
		loop:true,
		pagination:".swiper-pagination",
		paginationClickable:true
	})	
}
var $btn = $('.C_footer').children('div');
		$btn.on('tap',function(){
			$(this).addClass('active').siblings('div').removeClass('active');
//			alert($('.list').length)
			$('.list').eq($(this).index()).show().siblings('.list').hide();
			initScroll();
			initSwiper();
		})

