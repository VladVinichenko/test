$(document).ready(function(){
  $('.slider').slick({
   
      dots: false,
          autoplay: true,
      autoplaySpeed: 3000,
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
     arrows: true,
     appendArrows:$('.review-slide'),  
           initialSlide: 5, 
          
});
$('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
    asNavFor: '.slider-for',
    variableWidth: true,
    centerMode: false,
    focusOnSelect: true,

    swipeToSlide: true,
       arrows: false,
       initialSlide: 5,

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
            breakpoint: 660,
            settings: {
                slidesToShow:7,
                
             }
        }
    ]
});