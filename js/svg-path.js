$(function(){
	
	$().drawSvg('init');// Init SVG
	
                $().drawSvg('draw', { 
                href : 'javascript:void(0);',//=BASE_URL.$v['url']
                path : 'M0 1990 l0 -1990 880 0 880 0 0 119 0 119 45 6 c35 6 46 12 49 29 3 12 15 685 27 1495 26 1699 31 1572 -67 1828 l-54 141 0 121 0 122 -880 0 -880 0 0 -1990z',
                idLine : '1984'
            });
                    $().drawSvg('draw', { 
                href : 'javascript:void(0);',//=BASE_URL.$v['url']
                path : 'M482 512,L554 510,L586 679,L568 719,L533 721,L492 717,L463 571,L462 552,L459 520Z',
                idLine : '1987'
            });
                   
            
    function resizePage () {
    	$().drawSvg('resize'); // resizing SVG ...
	}

	$(window).resize(resizePage);
    resizePage ();
});