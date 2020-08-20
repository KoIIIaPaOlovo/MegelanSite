
function animatemain(){
  $('.main__bg').toggleClass('main__bg--animated');
  $('.main__image-mask').toggleClass('main__image-mask--animated');
  $('.main__title-1').toggleClass('main__title-1--animated');
  $('.main__title-2').toggleClass('main__title-2--animated');
  $('.main__smalltext').toggleClass('main__smalltext--animated');
  $('.main__about-us').toggleClass('main__about-us--animated');
  $('.main__main-text').toggleClass('main__main-text--animated');
  $('.main__line').toggleClass('main__line--animated');
  $('.main__tag').toggleClass('main__tag--animated');
  $('.main__last-tag').toggleClass('main__last-tag--animated');
  $('.main__next-circle').toggleClass('main__next-circle--animated');
  $('.main__our-work').toggleClass('main__our-work--animated');
}

function animateservices(){
  $('.services__title').toggleClass('services__title--animated');
  $('.services__slide').toggleClass('services__slide--animated');
  $('.services__down-line').toggleClass('services__down-line--animated');
  $('.services__down-border').toggleClass('services__down-border--animated');
  $('.services__down-circle').toggleClass('services__down-circle--animated');
  $('.services__down-arrow').toggleClass('services__down-arrow--animated');
}

function animateprojects(){
  setTimeout(
    function() 
    {
      $('.projects__grid-text').toggleClass('projects__grid-text--animated');
      $('.projects__title').toggleClass('projects__title--animated');
      $('.projects').toggleClass('projects--animated');
    }, 300);
}

function animateclients(){
  $('.clients__title').toggleClass('clients__title--animated');
  $('.clients__slide').toggleClass('clients__slide--animated');
}

function animateblog(){
  $('.blog__title').toggleClass('blog__title--animated');
  $('.blog__text--wrapper').toggleClass('blog__text--wrapper--animated');
  $('.blog__down-line').toggleClass('blog__down-line--animated');
  $('.blog__down-border').toggleClass('blog__down-border--animated');
  $('.blog__down-circle').toggleClass('blog__down-circle--animated');
  $('.blog__down-arrow').toggleClass('blog__down-arrow--animated');
  setTimeout(
    function() 
    {
    
  $('.blog__subtitle').toggleClass('blog__subtitle--animated');
    }, 1000);
}

function animatecontacts(){
  $('.contacts__title').toggleClass('contacts__title--animated');
  $('.contacts__phones').toggleClass('contacts__phones--animated');
  $('.contacts__adress').toggleClass('contacts__adress--animated');
}

function hidemenu(){
  $('.main__menu--container').fadeOut(500);
  $('.burger').fadeIn(500);
  $('.header__phone').fadeIn(500);
  $('.main__menu--arrow-circle').removeClass('main__menu--arrow-circle--animated');
  $('.main__menu--arrow-border').removeClass('main__menu--arrow-border--animated');
  $('.main__menu--arrow-arrow').removeClass('main__menu--arrow-arrow--animated');
  $('.main__menu--contacts').removeClass('main__menu--contacts--animated');
  $('.main__menu-line').removeClass('main__menu-line--animated');
  $('.main__menu-ul').removeClass('main__menu-ul--animated');
  $('.main__menu-subitems--wrapper').removeClass('main__menu-subitems--wrapper--animated');
  $('.main__menu-close').removeClass('main__menu-close--animated');
}


var lastAnimation = 0;
var animationTime = 3000; // in ms
var quietPeriod = 0; 

var ts;

$(document).ready(function(){

  $(document).on('keydown', function(event) {
    if (event.key == "Escape") {
        hidemenu();
    }
  });

  animatemain();
  
  $('.burger').on('click',function(){
    $('.main__menu--container').fadeIn(500);
    $('.burger').fadeOut(500);
    $('.header__phone').fadeOut(500);
    $('.main__menu--arrow-circle').addClass('main__menu--arrow-circle--animated');
    $('.main__menu--arrow-border').addClass('main__menu--arrow-border--animated');
    $('.main__menu--arrow-arrow').addClass('main__menu--arrow-arrow--animated');
    $('.main__menu--contacts').addClass('main__menu--contacts--animated');
    $('.main__menu-line').addClass('main__menu-line--animated');
    $('.main__menu-ul').addClass('main__menu-ul--animated');
    $('.main__menu-subitems--wrapper').addClass('main__menu-subitems--wrapper--animated');
    $('.main__menu-close').addClass('main__menu-close--animated');
  });

  $('.main__menu-close').on('click',function(){
    $('.main__menu--container').fadeOut(500);
    $('.burger').fadeIn(500);
    $('.header__phone').fadeIn(500);
    $('.main__menu--arrow-circle').removeClass('main__menu--arrow-circle--animated');
    $('.main__menu--arrow-border').removeClass('main__menu--arrow-border--animated');
    $('.main__menu--arrow-arrow').removeClass('main__menu--arrow-arrow--animated');
    $('.main__menu--contacts').removeClass('main__menu--contacts--animated');
    $('.main__menu-line').removeClass('main__menu-line--animated');
    $('.main__menu-ul').removeClass('main__menu-ul--animated');
    $('.main__menu-subitems--wrapper').removeClass('main__menu-subitems--wrapper--animated');
    $('.main__menu-close').removeClass('main__menu-close--animated');
  });

  $('.header__logo').on('click',function(){
    $('.main__menu--container').fadeOut(500);
    $('.burger').fadeIn(500);
    $('.header__phone').fadeIn(500);
    $('.main__menu--arrow-circle').removeClass('main__menu--arrow-circle--animated');
    $('.main__menu--arrow-border').removeClass('main__menu--arrow-border--animated');
    $('.main__menu--arrow-arrow').removeClass('main__menu--arrow-arrow--animated');
    $('.main__menu--contacts').removeClass('main__menu--contacts--animated');
    $('.main__menu-line').removeClass('main__menu-line--animated');
    $('.main__menu-ul').removeClass('main__menu-ul--animated');
    $('.main__menu-subitems--wrapper').removeClass('main__menu-subitems--wrapper--animated');
    $('.main__menu-close').removeClass('main__menu-close--animated');
  });

  $('.footer__logo').on('click',function(){
    $('.main__menu--container').fadeOut(500);
    $('.burger').fadeIn(500);
    $('.header__phone').fadeIn(500);
    $('.main__menu--arrow-circle').removeClass('main__menu--arrow-circle--animated');
    $('.main__menu--arrow-border').removeClass('main__menu--arrow-border--animated');
    $('.main__menu--arrow-arrow').removeClass('main__menu--arrow-arrow--animated');
    $('.main__menu--contacts').removeClass('main__menu--contacts--animated');
    $('.main__menu-line').removeClass('main__menu-line--animated');
    $('.main__menu-ul').removeClass('main__menu-ul--animated');
    $('.main__menu-subitems--wrapper').removeClass('main__menu-subitems--wrapper--animated');
    $('.main__menu-close').removeClass('main__menu-close--animated');
  });

  $('.main__menu-ul--item').children('a').on('click',function(){
    $('.main__menu--container').fadeOut(500);
    $('.burger').fadeIn(500);
    $('.header__phone').fadeIn(500);
    $('.main__menu--arrow-circle').removeClass('main__menu--arrow-circle--animated');
    $('.main__menu--arrow-border').removeClass('main__menu--arrow-border--animated');
    $('.main__menu--arrow-arrow').removeClass('main__menu--arrow-arrow--animated');
    $('.main__menu--contacts').removeClass('main__menu--contacts--animated');
    $('.main__menu-line').removeClass('main__menu-line--animated');
    $('.main__menu-ul').removeClass('main__menu-ul--animated');
    $('.main__menu-subitems--wrapper').removeClass('main__menu-subitems--wrapper--animated');
    $('.main__menu-close').removeClass('main__menu-close--animated');
  });


  $('.main__menu-ul--services').on('mouseover',function(){
    $('.main__menu--arrow').addClass('main__menu--arrow-services');
    $('.main__menu--arrow').removeClass('main__menu--arrow-our-work');
    $('.main__menu--arrow').removeClass('main__menu--arrow-blog');
    $('.main__menu--arrow').removeClass('main__menu--arrow-contact-us');

    
    

    setTimeout(
      function() 
      {
        $('.main__menu-our-work').fadeOut(500);
        $('.main__menu-blog').fadeOut(500);
        $('.main__menu-contact-us').fadeOut(500);
        $('.main__menu-services').fadeIn(500);
      }, 500);
  });

  $('.main__menu-ul--our-work').on('mouseover',function(){
    $('.main__menu--arrow').removeClass('main__menu--arrow-services');
    $('.main__menu--arrow').addClass('main__menu--arrow-our-work');
    $('.main__menu--arrow').removeClass('main__menu--arrow-blog');
    $('.main__menu--arrow').removeClass('main__menu--arrow-contact-us');
  
    

    setTimeout(
      function() 
      {
        $('.main__menu-services').fadeOut(500);
        $('.main__menu-blog').fadeOut(500);
        $('.main__menu-contact-us').fadeOut(500);
        $('.main__menu-our-work').fadeIn(500);
      }, 500);
  });

  $('.main__menu-ul--blog').on('mouseover',function(){
    $('.main__menu--arrow').removeClass('main__menu--arrow-services');
    $('.main__menu--arrow').removeClass('main__menu--arrow-our-work');
    $('.main__menu--arrow').addClass('main__menu--arrow-blog');
    $('.main__menu--arrow').removeClass('main__menu--arrow-contact-us');

    

    setTimeout(
      function() 
      {
        $('.main__menu-services').fadeOut(500);
        $('.main__menu-our-work').fadeOut(500);
        $('.main__menu-contact-us').fadeOut(500);
        $('.main__menu-blog').fadeIn(500);
      }, 500);
  });
  
  $('.main__menu-ul--contact-us').on('mouseover',function(){
    $('.main__menu--arrow').removeClass('main__menu--arrow-services');
    $('.main__menu--arrow').removeClass('main__menu--arrow-our-work');
    $('.main__menu--arrow').removeClass('main__menu--arrow-blog');
    $('.main__menu--arrow').addClass('main__menu--arrow-contact-us');

    

    setTimeout(
      function() 
      {
        $('.main__menu-services').fadeOut(500);
        $('.main__menu-our-work').fadeOut(500);
        $('.main__menu-blog').fadeOut(500);
        $('.main__menu-contact-us').fadeIn(500);
      }, 500);
  });
 







  $('.projects__grid-item').on('click',function(){
    $('.projects__grid-hidetext').removeClass('projects__grid-hidetext--animated');
    $('.projects__grid-show').removeClass('projects__grid-show--animated');
    $('.projects__grid-item').children('.projects__grid-overlay').removeClass('projects__grid-overlay--animated');
    $(this).children('.projects__grid-overlay').addClass('projects__grid-overlay--animated');
    setTimeout(
      function() 
      {
        $('.projects__grid-hidetext').addClass('projects__grid-hidetext--animated');
      }, 600);
      setTimeout(
        function() 
        {
          $('.projects__grid-show').addClass('projects__grid-show--animated');
        }, 1100);
  });

  $('.services__slider').slick({
    slidesToScroll: 4,
    slidesToShow: 4,
    variableWidth:false,
    adaptiveHeight:true,
    draggable:false,
    infinite:true,
    rows: 1,
    arrows:false,
    dots:true,
    autoplay:false,
    speed: 700,
    waitForAnimate:true,
    cssEase: 'ease-in',
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          slidesToShow:3,
          slidesToScroll:3,
          draggable:false,
          infinite:true,
          rows: 1
        }
      },
      {
        breakpoint: 1367,
        settings: {
          slidesToShow:2,
          slidesToScroll:2,
          draggable:false,
          infinite:true,
          rows: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
          draggable:false,
          infinite:true,
          rows: 1,
          speed: 1000,
        }
      }
    ]
});

$('.clients__slider').slick({
  slidesToScroll: 4,
  slidesToShow: 4,
  variableWidth:false,
  adaptiveHeight:true,
  draggable:false,
  infinite:true,
  rows: 1,
  arrows:false,
  dots:true,
  autoplay:false,
  speed: 1000,
  waitForAnimate:true,
  cssEase: 'ease-out',
  // cssEase: 'steps(1,end)',
  responsive: [
  {
    breakpoint: 1367,
    settings: {
      slidesToShow:3,
      slidesToScroll:3,
      draggable:false,
      infinite:true,
      rows: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow:2,
      slidesToScroll:2
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow:1,
      slidesToScroll:1
    }
  }
  ]
});

$('.clients__subslider').slick({
  slidesToScroll: 1,
  slidesToShow: 6,
  variableWidth:false,
  adaptiveHeight:true,
  draggable:false,
  infinite:true,
  rows: 1,
  arrows:true,
  dots:false,
  autoplay:true,
  speed: 800,
  autoplaySpeed: 1000,
  waitForAnimate:true,
  cssEase: 'ease-out',
  responsive: [
    {
      breakpoint: 1601,
      settings: {
        slidesToShow:4
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow:3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow:2,
        arrows:false
      }
    }
  ]
});

$('.blog__slider').slick({
  slidesToScroll: 1,
  slidesToShow: 1,
  variableWidth:false,
  adaptiveHeight:true,
  draggable:false,
  infinite:true,
  rows: 1,
  arrows:false,
  dots:true,
  autoplay:false,
  speed: 800,
  waitForAnimate:true,
  cssEase: 'ease-out',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow:1,
        slidesToScroll:1
      }
    }
  ]
});


$('.contacts__button-clear').on('click', function(){
  $('#contacts__name').val('');
  $('#contacts__theme').val('');
  $('#contacts__email').val('');
  $('#contacts__textfield').val('');
});



  $('.tasks__slider').slick({
      slidesToScroll: 3,
      slidesToShow: 3,
      variableWidth:false,
      adaptiveHeight:true,
      arrows:false,
      dots:true,
      infinite:false,
      autoplay:false,
      speed: 400,
      waitForAnimate:true,
      cssEase: 'ease-out',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow:1,
            slidesToScroll:1
          }
        }
      ]
  });


  $('.solutions__slider').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth:false,
    adaptiveHeight:true,
    arrows:false,
    dots:true,
    infinite:false,
    autoplay:false,
    speed: 400,
    waitForAnimate:true,
    fade:true,
    cssEase: 'ease-out'
});



if (  $('.services').length > 0)
  {

if(!$('.services').hasClass('services--animated') && ($(window).scrollTop() >= ($('.services').offset().top - 300)))
{
  animateservices();
  $('.services').addClass('services--animated');
}

if( !$('.projects').hasClass('projects--animatedd') && ($(window).scrollTop() >= ($('.projects').offset().top - 300)) )
{
  animateprojects();
  $('.projects').addClass('projects--animatedd');
}

if( !$('.clients').hasClass('clients--animatedd') && ($(window).scrollTop() >= ($('.clients').offset().top - 300)))
{
  animateclients();
  $('.clients').addClass('clients--animatedd');
}

if(!$('.blog').hasClass('blog--animatedd') && ($(window).scrollTop() >= ($('.blog').offset().top - 300)))
{
  animateblog();
  $('.blog').addClass('blog--animatedd');
}

if(!$('.contacts').hasClass('contacts--animatedd') && ($(window).scrollTop() >= ($('.contacts').offset().top - 300)))
{
  animatecontacts();
  $('.contacts').addClass('contacts--animatedd');
}

  }
});

$(window).on('scroll', function(){

  if ( $('.services').length > 0)
  {

  if(!$('.services').hasClass('services--animated') && ($(window).scrollTop() >= ($('.services').offset().top - 300)))
  {
    animateservices();
    $('.services').addClass('services--animated');
  }
  
  if( !$('.projects').hasClass('projects--animatedd') && ($(window).scrollTop() >= ($('.projects').offset().top - 300)) )
  {
    animateprojects();
    $('.projects').addClass('projects--animatedd');
  }
  
  if( !$('.clients').hasClass('clients--animatedd') && ($(window).scrollTop() >= ($('.clients').offset().top - 300)))
  {
    animateclients();
    $('.clients').addClass('clients--animatedd');
  }
  
  if(!$('.blog').hasClass('blog--animatedd') && ($(window).scrollTop() >= ($('.blog').offset().top - 300)))
  {
    animateblog();
    $('.blog').addClass('blog--animatedd');
  }
  
  if(!$('.contacts').hasClass('contacts--animatedd') && ($(window).scrollTop() >= ($('.contacts').offset().top - 300)))
  {
    animatecontacts();
    $('.contacts').addClass('contacts--animatedd');
  }

  }
});