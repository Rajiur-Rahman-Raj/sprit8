
//slider for banner part
$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  fade: true,
    arrows: false,
    autoplay: true,
    dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//banner part end

//team slider part
$('.team_slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
    arrows: false,
    autoplay: true,
    dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
	  {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//team slider end

//clients part start
$('.client-slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  fade: false,
    arrows: false,
    autoplay: true,
    dots: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
	  {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//clients part end

//our work part start

$(document).ready(function(){
		$('.portfolios').filterData({
			aspectRatio: '8:5',		
			nOfRow : 3,
            nOfColumn : 4,
			itemDistance : 0
		});
		$('.portfolio-controllers button').on('click',function(){
			$('.portfolio-controllers button').removeClass('active-work');
			$(this).addClass('active-work');
		});
 // filter js ends 
    
     $('.venobox').venobox(); 
    
    
	});
//our work end

//testimonials part start

$('.testimonials-slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  fade: false,
    arrows: false,
    autoplay: true,
    dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
	  {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//testimonials part end

//scrolling start
$top_to_btm=200;
$('.top_to i').click(function(){
	$('html,body').animate({
		scrollTop: 0
	},1500);
});

$(window).scroll(function(){
	$scrolling=$(this).scrollTop();
	if($scrolling>= $top_to_btm){
		$('.top_to i').fadeIn();
	}
	else{
		$('.top_to i').fadeOut();
	}
});
//scrolling end

$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});





