(function($) {
    $(document).ready(function() {
        var url, tab;

        // Change tab based on hash on page load
        url = $(location).attr('href');
        if (url.match('#')) {
            tab = url.split('#')[1];
        } else {
            tab = 'home';
        }
        $('.nav-tabs a[href=#' + tab + ']').tab('show');

        // When clicking a tab, update the hash
        $('.nav-tabs a').click(function(e) {
            window.location.hash = e.target.hash;
        });
        
        $('a.go-to-dolors').click(function () {
            $('.nav-tabs a[href=#dolors]').click();
            return false;
        });
        
        $('a.go-to-promises').click(function () {
            $('.nav-tabs a[href=#promises]').click();
            return false;
        });
        
        // When clicking a link in the dolors page, scroll to the section in the page
        $('#dolors-nav a').click(function() {
            var scrollAnchor = $(this).attr('data-scroll'),
                scrollPoint  = $('div[data-anchor="' +scrollAnchor + '"]').offset().top - 10;

           $('body, html').animate({
               scrollTop: scrollPoint
           }, 500);

           return false;
        });        
        // When clicking the "back to top" link in a section of the dolors page, scroll back to top
        $('.dolor a').click(function() {
           $('body, html').animate({
               scrollTop: 0
           }, 500);
           return false; 
        });

    });
})(jQuery);


