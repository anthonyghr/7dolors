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
    });
})(jQuery);


