//引入zepto模块

var $ = require('zepto-modules/zepto');
require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/form');
require('zepto-modules/ie');
require('zepto-modules/touch');

module.exports = $;


$("#main-content").hide();
//引入swiper模块



var Swiper = require('./components/swiper/swiper.min.js');

var swiperAnimate = require('./components/swiper/swiper.animate1.0.2.min.js');

var swiper = new Swiper('.swiper-container',{
	    pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',

	  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  } 
  });  

var IScroll = require('./components/iscroll/iscroll.js');

$("#enter").tap(function(){
	$(".swiper-container").hide();
	$("#main-content").show();

		$.ajax({
		type:'GET',
		url:'http://www.oreooldman.online/www/php/select.php',
		success:function(data){
			var html = "";
			data = JSON.parse(data);
			for(var i = 0; i < data.length; i++){
				console.log(data[i]);
				html += "<li>" + data[i].name +"</li>";
			};

			$("#scroller ul").html(html);
			// console.log(data);
		}
	});

 //    myScroll = new IScroll('#wrapper',{ mouseWheel: true });
 //    // document.addEventListener('touchmove',function(e){ e.preventDefault(); },false);
	//     document.addEventListener('touchmove', function(e) {
	//     // 判断默认行为是否可以被禁用
	//     if (e.cancelable) {
	//         // 判断默认行为是否已经被禁用
	//         if (!e.defaultPrevented) {
	//             e.preventDefault();
	//         }
	//     }
	// }, false);
});  


$("#project").tap(function(){
		$.ajax({
		type:'GET',
		url:'http://www.oreooldman.online/www/php/select.php',
		success:function(data){
			var html = "";
			data = JSON.parse(data);
			for(var i = 0; i < data.length; i++){
				console.log(data[i]);
				html += "<li>" + data[i].name +"</li>";
			};

			$("#scroller ul").html(html);
			// console.log(data);
		}
	}); 
});

$("#me").tap(function(){
		$.ajax({
		type:'GET',
		url:'http://www.oreooldman.online/www/php/select.php',
		success:function(data){
			var html = "";
			data = JSON.parse(data);
			for(var i = 0; i < data.length; i++){
				html += "<li>" + data[i].title +"</li>";
			};

			$("#scroller ul").html(html);

		}
	});
});	


$("#skill").tap(function(){
		$.ajax({
		type:'GET',
		url:'/api/skill.php',
		success:function(data){
			var html = "";
			data = JSON.parse(data);
			for(var i = 0; i < data.length; i++){
				html += "<li>" + data[i].name +"</li>";
			};

			$("#scroller ul").html(html);

		}
	});
});	

$("#experience").tap(function(){
		$.ajax({
		type:'GET',
		url:'http://www.oreooldman.online/www/php/select.php',
		success:function(data){
			var html = "";
			data = JSON.parse(data);
			for(var i = 0; i < data.length; i++){
				html += "<li>" + data[i].name +"</li>";
			};

			$("#scroller ul").html(html);
		}
	});
});			





