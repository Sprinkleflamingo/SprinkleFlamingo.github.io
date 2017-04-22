$(document).ready(function() {
       $(window).scroll(function() {
        if ($(this).scrollTop() > 220) {
            $('.back-to-top').fadeIn(500);
        } else {
            $('.back-to-top').fadeOut(500);
        }
    });

    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });
    $(".navBar").hover(
        function() {
           $( this ).append( $( "<span> <3 </span>" ) );
        }, function() {
            $( this ).find( "span:last" ).remove();
        }
    );

});
