function sel(a) {
	return document.querySelector(a);
};

function id(a) {
	return document.getElementById(a);
};
/*Drop-down menu */
$(document).ready(function () {
	$('.dropdown').hover(function () {
		$(this).children('.sub-menu').slideDown(200);
	}, function () {
		$(this).children('.sub-menu').slideUp(200);
	});
});
$(document).ready(function () {
	$('nav ul li ul li a').hover(function () {
		$(this).toggleClass('changed');
	});
});
$(document).ready(function () {
	$('nav a.menu_mobile').click(function () {
		$('nav a.nav_item').toggle(1000);
		$(this).toggleClass('open');
	});
});

$(document).ready(function () {
	
	/*Click on navigation menu items*/
				  
	$('nav a#about').click(function () {
		$('html, body').animate({
			scrollTop: $('.about').offset().top - 70
		}, 1000);
		return false;
	});
	$('nav a#products').click(function () {
		$('html, body').animate({
			scrollTop: $('.products').offset().top - 70
		}, 1000);
		return false;
	});
	$('nav a#contact').click(function () {
		$('html, body').animate({
			scrollTop: $('.contact').offset().top - 70
		}, 1000);
		return false;
	});
});
	
	
	
/*Fixed menu */	
	var menu = $('#header__navbar');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100 && menu.hasClass('default')) {
			menu.removeClass('default').addClass('fixed');
			
			$('nav a#home').css('color', 'rgb(255, 242, 0)');
			$('nav a#products').css('color', 'rgb(35, 35, 35)');
			$('nav a#contact').css('color', 'rgb(35, 35, 35)');
			$('nav a#about').css('color', 'rgb(35, 35, 35)');
		}
		if ($(this).scrollTop() > 1400) {
			$('nav a#products').css('color', 'rgb(255, 242, 0)');
			$('nav a#about').css('color', 'rgb(35, 35, 35)');
			$('nav a#home').css('color', 'rgb(35, 35, 35)');
			$('nav a#contact').css('color', 'rgb(35, 35, 35)');
		}
		if ($(this).scrollTop() > 2300) {
			$('nav a#about').css('color', 'rgb(255, 242, 0)');
			$('nav a#home').css('color', 'rgb(35, 35, 35)');
			$('nav a#products').css('color', 'rgb(35, 35, 35)');
			$('nav a#contact').css('color', 'rgb(35, 35, 35)');
			
			
	        /*$('.bar').each(function () {
		var $bar = $(this)
			, $pct = $bar.find(".pct")
			, data = $bar.data("bar");
		setTimeout(function () {
			$bar.css("background-color", data.color).animate({
				"width": $pct.html()
			}, data.speed || 2000, function () {
				$pct.css({
					"color": data.color
					, "opacity": 1
				});
			});
		}, data.delay || 0);
	});*/
		
		}
		if ($(this).scrollTop() > 3100) {
			$('nav a#contact').css('color', 'rgb(255, 242, 0)');
			$('nav a#products').css('color', 'rgb(35, 35, 35)');
			$('nav a#about').css('color', 'rgb(35, 35, 35)');
			$('nav a#home').css('color', 'rgb(35, 35, 35)');	
		}
		if ($(this).scrollTop() == 0) {
			$('nav a#about').css('color', 'rgb(35, 35, 35)');
			$('nav a#home').css('color', 'rgb(255, 242, 0)');
			$('nav a#products').css('color', 'rgb(35, 35, 35)');
		}
		else if ($(this).scrollTop() <= 100 && menu.hasClass('fixed')) {
			menu.removeClass('fixed').addClass('default');
		}
	});
	


    $(window).scroll(function() {
        var scrollEvent = ($(window).scrollTop() > 2300);
        if (scrollEvent){ 
            $('.bar').each(function () {
		var $bar = $(this), 
			$pct = $bar.find(".pct"), 
			data = $bar.data("bar");
		setTimeout(function () {
			$bar.css("background-color", data.color).animate({
				"width": $pct.html()
			}, data.speed || 2000, function () {
				$pct.css({
					"color": data.color, 
					"opacity": 1
				});
			});
		}, data.delay || 0);
	});
        }
    });





	
/*Slider*/
function sel(a) {
	return document.querySelector(a);
}
var puctures = ['slide1.jpeg', 'slide2.jpeg', 'slide3.jpeg'];
var i = 0;
var inputs = document.querySelectorAll('.elem');
var slideIndex = 1;
//slide right
function goRight() {
	++i;
	if (i > puctures.length - 1) i = 0;
	sel('.header__title').style.background = 'url(img/' + puctures[i] + ')';
	sel('.header__title').style.backgroundSize = 'cover';
	inputs[i].style.backgroundColor = "#ffffff";
}
//slide left
function goLeft() {
	--i;
	if (i < 0) i = puctures.length - 1;
	sel('.header__title').style.background = 'url(img/' + puctures[i] + ')';
	sel('.header__title').style.backgroundSize = 'cover';
}
sel('.right').addEventListener('click', goRight);
sel('.left').addEventListener('click', goLeft);
/*var auto = setInterval(goRight, 3000);*/


/*See_more section products*/
$(document).ready(function () {
	($('.advantages__content .ikon_heart img')).hover(function () {
		$('.see_more.item1').show();
	});
	($('.see_more.item1 h4')).click(function () {
		$('.see_more.item1').hide();
	});
});


/*function myMap() {
	var coordinates = { lat: 49.8313573, lng:23.9949789},
		map = new google.maps.Map(document.getElementById('map'), {
			center: coordinates
		});
	
}*/
/*google.maps.event.addDomListener(window, 'load', myMap);*/


