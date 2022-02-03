 /*서브메뉴 슬라이드 효과*/
 $(".gnb>ul>li").hover(function(){
	$(this).children(".submenu").stop().slideDown(400);
},function(){
	$(this).children(".submenu").stop().slideUp(400);
});

$("#btn").click(function(){
	$(".submenu").fadeToggle(200);
});


/*탑버튼 기능*/
$(function(){$(window).scroll(function(){
	if ($(this).scrollTop()>250)
	{$('#topBtn').fadeIn();}
	else{$('#topBtn').fadeOut();}
});
	$("#topBtn").click(function(){
	$('html,body').animate({scrollTop:0},400); 
	return false;});
});

/*모달 기능*/
$(document).ready(function(){
	$(".rule_btn").click(function(){
		$(".modal,.modal_background").fadeIn(500);
		return false; //a태그의 링크이벤트 종료
	});
	$("html,.modal>p").click(function(){
		$(".modal,.modal_background").fadeOut(500);
	});
});

/*LNB 기능*/
$(".lnb>li").click(function(){
	$(this).children(".lnb_sub").stop().slideToggle(400);
});


