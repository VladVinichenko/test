$(document).ready(function(){
  $('.slider').slick({
   
   arrows: false,
      dots: false,
          autoplay: true,
      autoplaySpeed: 30,
      infinite: true,
      pauseOnDotsHover: true,
    pauseOnHover: true,
  });
});

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
    asNavFor: '.slider-nav',
     adaptiveHeight: true,
     fade: false,
        arrows: false,
          
});
$('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
    asNavFor: '.slider-for',
    variableWidth: true,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
    // initialSlide: 0,
    swipeToSlide: true,
       arrows: true,


//  infinite: false
        //   fade: true,
    
    responsive: [
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 3,
             }
        },
                        {
            breakpoint: 500,
            settings: {
                slidesToShow:6,
                
             }
        },
                {
            breakpoint: 660,
            settings: {
                slidesToShow:7,
                
             }
        }
    ]
});