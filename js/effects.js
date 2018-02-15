$(document).ready(function(){
    
    //On search field focus.
    $("#header-input-search").on("focus", function(){
        $("li.search").addClass("expand");
        $("#btn-search").addClass("expand");
    
    
        //On search field losing focus.
    }).on("blur", function(){
        $("li.search").removeClass("expand");
        $("#btn-search").removeClass("expand");
    });

    //News Carousel call
    $(".thumbnails").owlCarousel({
        loop: true,
        magin: 10,
        responsive: {
            0: {
                item: 1
            },
            480: {
                item: 3
            },
            768:{
                item: 4
            }
        }
    });
});