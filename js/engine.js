$(document).ready(function() {											 
	
	$('.submenu').hover(
		function(){
			$(this).find('ul').css('left','auto');
			$(this).addClass('sfhover');
		},
		function(){
			$(this).find('ul').css('left','-999em');
			$(this).removeClass('sfhover');
		}
	);													 
	
	$("#tab_01_cont").load("stage_01.html")
	/*Oculta y Muestra contenedor en paginas informativas*/
	$('a.vermas').click(function () {
		$('.vermascont').show(400);
		$('a.vermas, #conoce').hide();
		$('a.ocultarmas').show();
	});
	$('a.ocultarmas').click(function () {
		$('.vermascont').hide(400);
		$('a.vermas, #conoce').show();
		$('a.ocultarmas').hide();
	});

	/*scrollto*/
	$('#CubTab').serialScroll({target:'#CT_secction',items:'li', prev:'a.btn_prev',next:'a.btn_next',axis:'xy',queue:false,event:'click',stop:false,lock:true, duration:1000,start: 0, force:true,cycle:true,step:1, jump:false, lazy:false,interval:5000, navigation:'#CT_navigation li',constant:true,onBefore:function( e, elem, $pane, $items, pos ){ $("#CT_navigation li a").removeClass("cubo_btn_act");$('#'+$($("#CT_navigation li").get(pos)).attr("id")+' a').addClass("cubo_btn_act"); e.preventDefault();if( this.blur )this.blur();},onAfter:function( elem ){}});
			
	$('#btnpause').addClass('btnpause');
	$("#btnpause").toggle(function(){
		$('#CT_secction').trigger( 'stop' );
		$('#btnpause').addClass('act_play');
		},function(){
		$('#CT_secction').trigger( 'start' );
		$('#btnpause').removeClass('act_play');
	});
	
	/*carousel*/
	jQuery('#carousel_01').jcarousel({		scroll:1,		visible:1,        wrap: 'both',        initCallback: mycarousel_initCallback   });
	
	$("#tab_01 ul li a").click(function(){
		$("#tab_01 ul li").removeClass("on");
		x=$(this).attr("href");
		$("#tab_01_cont").load(x+'?t='+Math.random());
		$(this.parentNode).addClass("on");
		return false;
	});
	
	$(".alterno li:odd").addClass("alt");
	
	if($('#accordion_01').length>0 ){		jQuery('#accordion_01').accordion({			header: 'a.head',	/*active: false,*/		alwaysOpen: false,			autoheight: false		});	}
	if($('#accordion_02').length>0 ){		jQuery('#accordion_02').accordion({			header: 'a.head3',	/*active: false,*/		alwaysOpen: false,			autoheight: false		});	}
	
	//TimePicker
	$('#citatime').timepicker({
		'minTime': '10:00am',
		'maxTime': '6:00pm',
		'step': 15
	});
	
	//Datepickers
	$('#citadate').jdPicker({ 
     date_format:"dd/mm/YYYY" 
	});
	$('#con_de').jdPicker({ 
     date_format:"dd/mm/YYYY" 
	});
	$('#con_a').jdPicker({ 
     date_format:"dd/mm/YYYY" 
	});
	
	//Close shadowbox
	$("#close_sbx").click(function(){
		parent.Shadowbox.close();
	});
	
});

function mycarousel_initCallback(carousel)
{
    carousel.buttonNext.bind('click', function() {
        carousel.startAuto(0);
    });
    carousel.buttonPrev.bind('click', function() {
        carousel.startAuto(0);
    });
    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });
};

Shadowbox.init({
    language: 'es',
    players:  ['img', 'html', 'iframe', 'qt', 'wmp', 'swf', 'flv', 'mp3']
});

$(window).load(function() {
    $('.flexslider').flexslider({
		controlNav: false,
		directionNav: true
	});
});