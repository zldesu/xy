$(function(){
		
	//网页导航锚点过渡
	$('.nav-wrap a').click(function() {
		//获得对应区域相对于网页原点的位置
		var objTop = $(this.hash).offset().top - 100;
		//滚动条过渡到顶部
		$('html,body').animate({scrollTop:objTop},1000)
		return false;
	});
	
	var nav = $('.nav-wrap');
	//导航栏相对于网页原点的位置
	var navPos = nav.offset().top;
	//导航栏自身高度
	var navHeight = nav.outerHeight();
	//滚轮触发小火箭
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll >= 200){
			$('#topControl').fadeIn("slow");
		}
		if(scroll < 200){
			$('#topControl').fadeOut("slow");
		}
		document.title = scroll;
		/*导航栏浮动*/
		if(scroll >= navPos){
			if(!(nav.hasClass('fix'))){
				nav.addClass('fix');
				$('.banner').css('margin-bottom',navHeight);
			}
		}else{
			if(nav.hasClass('fix')){
				nav.removeClass('fix');
				$('.banner').css('margin-bottom',0);
			}
		}
		
		/*滚动监听*/
		//海量
		var introPos = {
			start:$('#post-intro').offset().top - navHeight,
			end:$('#post-intro').offset().top + $('#post-intro').outerHeight() - navHeight
		}
		
		if(scroll > introPos.start && scroll < introPos.end){
			if(!$('.intro').hasClass('active')){
				$('.intro').addClass('active');
			}
		}else{
			if($('.intro').hasClass('active')){
				$('.intro').removeClass('active');
			}
		}
		//无需
		var usagePos = {
			start:$('#post-usage').offset().top - navHeight,
			end:$('#post-usage').offset().top + $('#post-usage').outerHeight() - navHeight
		}
		
		if(scroll > usagePos.start && scroll < usagePos.end){
			if(!$('.usage').hasClass('active')){
				$('.usage').addClass('active');
			}
		}else{
			if($('.usage').hasClass('active')){
				$('.usage').removeClass('active');
			}
		}
		//瘦身
		var choisePos = {
			start:$('#choiceness').offset().top - navHeight,
			end:$('#choiceness').offset().top + $('#choiceness').outerHeight() - navHeight
		}
		
		if(scroll > choisePos.start && scroll < choisePos.end){
			if(!$('.choise').hasClass('active')){
				$('.choise').addClass('active');
			}
		}else{
			if($('.choise').hasClass('active')){
				$('.choise').removeClass('active');
			}
		}
	});
	
	//小火箭回到顶部
	$('#topControl').click(function() {
		$('html,body').animate({scrollTop:0},1000);
	});
});