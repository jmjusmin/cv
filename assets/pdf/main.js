$(document).ready(function(){

    //owl-carousel
    // $('.main .project .owl-carousel').owlCarousel({
    //     loop:true,
    //     autoplay:true,
    //     dots:true
    // }) 

    var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

});