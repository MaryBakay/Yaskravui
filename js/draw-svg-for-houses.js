/** Draws SVG for houses */
(function ($) {
    
    // Calls methods
    $.fn.drawSvg = function (method) {
        // Call method, default init
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            alert('not isset method - '+method);
        } 
    };
    
    // Global vars
    var raphael;
    var lines;   
    var idLine = 0;
    
    var methods = {
        init : function () {   
            // init Raphael
            raphael = new ScaleRaphael("raphael", 1920, 984);
            // init params
            lines   = new Array(); 
            // starting resize
            setTimeout(function(){
                methods.resize();
            }, 600);
        },
        
        // Drawing ...
        draw : function ( params ) {
            //idLine++;
            // params
            var drawParams = $.extend({
                path            : null,
                stroke          : '#007fc7',
                strokeWidth     : 0,
                fill            : '#88df0a',
                fillOpacity     : 0.4,
                opacity         : 0,
                linejoin        : 'round',
                href            : false,
                idLine 			: 0
            }, params);
            
            if(drawParams.path == undefined) return false;

            // Lines drawing
            lines[drawParams.idLine] = raphael.path(drawParams.path);
            lines[drawParams.idLine].attr('stroke',        drawParams.stroke);
            lines[drawParams.idLine].attr('stroke-width',  drawParams.strokeWidth);
            lines[drawParams.idLine].attr('fill',          drawParams.fill);
            lines[drawParams.idLine].attr('fill-opacity',  drawParams.fillOpacity);
            lines[drawParams.idLine].attr('opacity',       drawParams.opacity);
            lines[drawParams.idLine].attr('linejoin',      drawParams.linejoin);
            lines[drawParams.idLine].attr('font',		   drawParams.idLine);
            
            if (drawParams.href) {
                lines[drawParams.idLine].attr('href', drawParams.href);
            }	
            
            // Hover SVG
            $('svg path').hover(function(){
                var linePath = $(this).attr('font');	
                
                if($('#marker_'+linePath).data('active')==3 || $('#marker_'+linePath).data('active')==5){
	                lines[linePath].stop().animate({ opacity : 1 }, 300);
	                $('#marker_'+linePath).addClass('here');
                } else {
					//lines[linePath].stop().animate({ opacity : 1 }, 300);
					$('#marker_'+linePath).show(100);
				}
            }, function () {
                var linePath = $(this).attr('font');	
                if($('#marker_'+linePath).data('active')==3 || $('#marker_'+linePath).data('active')==5){
	                lines[linePath].stop().animate({ opacity : 0 }, 300);
	                $('#marker_'+linePath).removeClass('here');
                } else {
					//lines[linePath].stop().animate({ opacity : 0 }, 300);
					$('#marker_'+linePath).hide(100);
				}
            });
            
            //$('svg path').unbind('mouseover');
            //$('svg path').unbind('click');
            
            
            
                        
           
        },
        // Resize
        resize : function () {
            
            var imgWidth  = $('#rel_2').width();
            var imgHeight = $('#rel_2').height();
            
            // resizing svg
            raphael.changeSize(imgWidth, imgHeight, true, false);
        }
    };
    
    var t =setTimeout(function(){
    $('svg path, .dom_mrkr_3, .dom_mrkr_5').click(function(e){

		        var linePath = $(this).attr('font');
		        
		    if($('#marker_'+linePath).data('active')==3 || $('#marker_'+linePath).data('active')==5){

	        	if($('.dom_mrkr_3.here2, .dom_mrkr_5.here2').size()>0){
	        		id_now = $('.dom_mrkr_3.here2, .dom_mrkr_5.here2').attr('id');
	        		id_int = id_now.replace('marker_','');
	        		if(id_int != linePath){
	        			
						$('#'+id_now+ ' div.dom_mrkr_a').hide(100);
						$('#'+id_now).removeClass('here2');
		        		$('#'+id_now).stop().animate({'margin-top':'-15px'},100);
		        		$('#status_dom_'+id_int).hide(100);
		        		
		        		$('#marker_'+linePath).addClass('here2');
				        $('#marker_'+linePath + ' div.dom_mrkr_a').show(100);
				        var coll_links = $('#marker_'+linePath + ' div.dom_mrkr_a').size() - 1;
				        $('#marker_'+linePath).stop().animate({'margin-top':-coll_links*27},100);
				        $('#status_dom_'+linePath).show(100);
				        
					} else {
						
						$('#marker_'+linePath+ ' div.dom_mrkr_a').hide(100);
						$('#marker_'+linePath).removeClass('here2');
		        		$('#marker_'+linePath).stop().animate({'margin-top':'-15px'},100);
		        		$('#status_dom_'+linePath).hide(100);
					}
				} else {
					
			        $('#marker_'+linePath).addClass('here2');
			        $('#marker_'+linePath + ' div.dom_mrkr_a').show(100);
			        var coll_links = $('#marker_'+linePath + ' div.dom_mrkr_a').size() - 1;
			        $('#marker_'+linePath).stop().animate({'margin-top':-coll_links*27},100);
			        $('#status_dom_'+linePath).show(100);
			        
				}
			} else {
				$('#marker_'+linePath).show(100);
			}
		    });
      },1000);
            
}) (jQuery);