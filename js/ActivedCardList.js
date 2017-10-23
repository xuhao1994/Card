/*
* @Author: xuhao1994
* @Date:   2017-10-23 17:36:20
* @Last Modified by:   xuhao1994
* @Last Modified time: 2017-10-23 21:08:12
*/
$(function(){
	initSwiper();
})

function initSwiper(){
	var testdata = [
		{"cardNum":"5324 2154","cardMoney":"1000","id":"111"},
		{"cardNum":"5324 5849","cardMoney":"2000","id":"222"},
		{"cardNum":"5324 8476","cardMoney":"1500","id":"333"}
	]
	var mySwiper = new Swiper('.swiper-container', {
		slidesPerView :'auto',
		centeredSlides : true,
		pagination : '.swiper-pagination',
		paginationClickable :true,
		onSlideChangeEnd:function(swiper){
			onChangeCard(swiper.activeIndex,testdata)
		},
		onInit:function(swiper){
			onChangeCard(swiper.activeIndex,testdata)
		}
	})
}

function onChangeCard(activeIndex,data){
	data.map(function(ele,index){
		if(index==activeIndex){
			showData(ele)
		}
	})
}

function showData(data){
	$("#CardNum").text(data.cardNum);
	$("#CardMoney").text("¥"+data.cardMoney);
	var url = $("#goDetail").attr("href").split('?')[0];
	$("#goDetail").attr("href",url+"?id="+data.id);
}

