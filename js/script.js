function screenSize() {
    var w, h;
    w = (window.innerWidth ? window.innerWidth : (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.offsetWidth));
    h = (window.innerHeight ? window.innerHeight : (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight));
    return {w:w, h:h};
}

$(document).ready(function(){
	
	var ratio=0.4755208333; // "соотношение" сторон картинок на фоне (1020/1920=0.53125 830/1620=0.51234567 913/1920=0.4755208333)
	var w;
	var h;
	
	
	
	function win_resize() { // изменение размеров фона
		w=$('body').width();
		console.log(w);
		h=$('body').height();
		console.log(h);
		var d=h/w;
		if(d>ratio) {
			$('.background').css({'width':h/ratio,'height':h,'top':0,'left':0.5*(w-h/ratio)});
			$('.kvartiry').css({'width':h/ratio,'height':h,'top':0,'left':0.5*(w-h/ratio)});
		} else {
			$('.background').css({'width':w,'height':w*ratio,'top':0,'left':0});
			$('.kvartiry').css({'width':w,'height':w*ratio,'top':0,'left':0});
		};
	};


	$(window).bind('resize',function(){ // при изменении размера окна - изменяем размеры фона
		win_resize();
	});
	win_resize();

	///////////////////////// height documents BEGIN ////////////////////////////////////
	
	setTimeout(function(){
		var footer_h = $('#footer').outerHeight(true);
		var header_h = $('#header').outerHeight(true);
		var global_h = $('#global').outerHeight(true);
		var content_h = 0;//$('#content').height();
		var screenSize_h = screenSize().h;
		//alert(header_h);
		if(screenSize_h > global_h){
			content_h = screenSize_h - footer_h - header_h - 40;
			$('#content').height(content_h);
		}
	}, 50);
	
});
	
	///////////////////////// height documents END ////////////////////////////////////
	