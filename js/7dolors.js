(function($) {
    $(document).ready(function() {
        // Change tab based on hash on page load
        var url, tab;

        url = $(location).attr('href');
        if (url.match('#')) {
            tab = url.split('#')[1];
        } else {
            tab = 'promises';
        }
        $('.nav-tabs a[href=#' + tab + ']').tab('show');

        // When clicking a tab, update the hash
        $('.nav-tabs a').click(function(e) {
            window.location.hash = e.target.hash;
        });
        
        
        $('#dolors-nav a').click(function() {
            var scrollAnchor = $(this).attr('data-scroll'),
                scrollPoint  = $('div[data-anchor="'+scrollAnchor+'"]').offset().top - 10;

           $('body, html').animate({
               scrollTop: scrollPoint
           }, 500);

           return false;
        });

    });
})(jQuery);


