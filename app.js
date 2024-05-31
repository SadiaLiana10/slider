$(function(){
     $('.parent').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        autoplay:true,
        autoplaySpeed:1000,
        prevArrow:'<span class="left"><i class="fa-solid fa-arrow-left"></i></span>',
        nextArrow:'<span class="right"><i class="fa-solid fa-arrow-right"></i></span>'
    });
})